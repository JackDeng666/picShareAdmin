import request from './request'
class Category {
  async getAll(params){
    return await request({
      method: 'get',
      url: 'category/getAll',
      params
    })
  }
  async addCategory(data){
    return await request({
      method: 'post',
      url: 'category/addCategory',
      data
    })
  }
  async updateCategory(data){
    return await request({
      method: 'post',
      url: 'category/updateCategory',
      data
    })
  }
}

export default new Category()
