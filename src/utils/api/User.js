import request from './request'
class User {
  async getUserList(params){
    return await request({
      method: 'get',
      url: 'user/getUserList',
      params
    })
  }
  async adminLogin(name,password){
    return await request({
      method: 'post',
      url: 'user/adminLogin',
      data: {
        account: name,
        password
      }
    })
  }
}

export default new User()
