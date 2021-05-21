import LoginServer from '../servers/LoginServer'

// class SuperController {
//   constructor() {
//     // const {params, query, querystring} = ctx
//   }
// }
const loginServer = new LoginServer()

// class LoginController extends SuperController {
class LoginController {
  constructor() {
    // super()
    // this.loginServer = new LoginServer()
  }

  async login(ctx, next) {
    debugger
    const {params, query, querystring, body} = ctx.request

    const {username, password} = body;

    const user = await loginServer.login({username, password}, ctx)

    ctx.session.user = user
    debugger
    await ctx.send(200, {
      code: 1,
      success: true,
      message: '登陆成功',
      result: {
        user
      }
    })
    return next();
  }

  async userInfo(ctx, next) {
    await ctx.send(200, {
      code: 1,
      success: true,
      message: '登陆成功',
      result: {
        userInfo: ctx.session.user
      }
    })
    return next();
  }

}

export default new LoginController()
