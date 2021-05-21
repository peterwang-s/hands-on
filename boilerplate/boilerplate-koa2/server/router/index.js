import Router from "koa-router";

import loginCtl from '../controllers/LoginController'

/**  userRouter 用户相关路由  **/
const userRouter = new Router();

userRouter.post('/login', loginCtl.login)
userRouter.get('/userInfo', loginCtl.userInfo)


export default userRouter
