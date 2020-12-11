import request from './request'
class Category {
  async getAll(params){
    return await request({
      method: 'get',
      url: 'category/getAll',
      params
    })
  }
}

export default new Category()
