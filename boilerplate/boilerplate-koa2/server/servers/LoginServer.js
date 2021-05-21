class SuperServer {
  constructor() {
    // const {params, query, querystring} = ctx
  }
}


class LoginServer extends SuperServer {
  constructor() {
    super()
  }

  async login(params, ctx) {
    return params
  }

}

export default LoginServer
