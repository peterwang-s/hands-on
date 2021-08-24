import { Get, Post, Query, Body, Req, Res, Logger, Controller} from "@nestjs/common"
import { Request, Response} from "express"
import {BaiduBceService} from "../../services/basic/baidubce.service"

@Controller('basic/ping')
export class BaiduBceCtl {
    constructor(private readonly _basicService: BaiduBceService) {
        
    }

    @Get('hello')
    async sayHello(@Res() response: Response){
        
        response.json({
            code:200,
            message: await this._basicService.getHello()
        })
    }
}