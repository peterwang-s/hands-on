import { Injectable } from '@nestjs/common';


/**
 * 生成服务 ( nest g s) 来实现和隔离业务逻辑
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
