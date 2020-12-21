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
  async updatePicture(data){
    return await request({
      method: 'post',
      url: 'pic/updatePicture',
      data
    })
  }
  async updatePicList(data){
    return await request({
      method: 'post',
      url: 'pic/updatePicList',
      data
    })
  }
}

export default new Pic()
