import { Injectable, Logger, HttpService } from '@nestjs/common';
import { BosClient, Auth } from '@baiducloud/sdk';

@Injectable()
export class BaiduBceService {
  private Authorization;

  constructor(private httpService: HttpService, private client: BosClient) {
    // bucket 参数配置
    const config = {
      endpoint: 'https://bj.bcebos.com', //传入Bucket所在区域域名 https://bj.bcebos.com
      credentials: {
        ak: process.env.bos_access_key, //您的AccessKey
        sk: process.env.bos_secret_access_secret, //您的SecretAccessKey
      },
    };
    this.client = new BosClient(config);
  }

  getHello(): string {
    return 'Hello World!';
  }

  /**
   * 百度签名认证算法，需要实时更新，否则服务启动初始化的时间戳会失效
   * @returns
   */
  async generateAuthorization(): Promise<any> {
    let clientAuth: Auth = new Auth(
      process.env.bos_access_key, //您的AccessKey
      process.env.bos_secret_access_secret, //您的SecretAccessKey
    );

    // console.log("clientAuth", clientAuth);
    let serverTimestamp = new Date().getTime();
    let timeOffset = serverTimestamp - Date.now();
    let revisionTimestamp = Date.now() + (timeOffset || 0);
    this.Authorization = clientAuth.generateAuthorization(
      'POST',
      '/v2/cache/purge',
      null,
      {
        Host: 'cdn.baidubce.com',
      },
      revisionTimestamp / 1000,
      300,
      ['Host', 'x-bce-date'],
    );
    console.log('本次请求使用百度签名，Authorization：', this.Authorization);
    return this.Authorization;
  }

  async requestRefreshBaiduCdn(url: string): Promise<any> {
    const _self = this;
    this.generateAuthorization();
    return await this.httpService
      .post<any>(
        `http://cdn.baidubce.com/v2/cache/purge`,
        {
          tasks: [
            {
              url: url,
            },
          ],
        },
        {
          headers: {
            Authorization: _self.Authorization,
            'Content-Type': 'text/plain',
          },
        },
      )
      .toPromise();
  }
}
