import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


/**
 * 控制器负责处理网络请求，并且进行相应资源操作，最终返回响应结果
 * 装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）
 * 生成控制器 ( nest g co) 来定义 CRUD 路由（或 GraphQL 应用程序的查询/突变）
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
