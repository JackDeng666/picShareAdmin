import request from './request'
class Pic {
  async getPicList(params){
    return await request({
      method: 'get',
      url: 'pic/picList',
      params
    })
  }
  async getPicSetList(params){
    return await request({
      method: 'get',
      url: 'pic/picSetList',
      params
    })
  }
}

export default new Pic()
