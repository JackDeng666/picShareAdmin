<template>
  <div>
    <!-- 搜索框 -->
    <!-- <div class="search-box">
      <el-input
        placeholder="可以通过用户名搜索用户..."
        prefix-icon="el-icon-search"
        style="width: 400px"
        v-model="searchKeyWord"
        size="small">
      </el-input>
      <el-button type="primary" icon="el-icon-search" size="small" style="margin-left: 3px">搜索</el-button>
    </div> -->
    <!-- 用户列表 -->
    <div class="user-list-box">
      <!-- 用户卡片 -->
      <el-card v-for="(user,index) in userList" :key="index">
        <!-- 头部信息 -->
        <div slot="header">
          <span>昵称：{{user.name ? user.name : "无"}}</span>
          <el-button class="delete-btn" type="text" icon="el-icon-delete" @click="handleDelete(user.id)">
            封禁
          </el-button>
        </div>
        <!-- 主题信息 -->
        <div class="user-main">
          <!-- 头像 -->
          <div><img :src="user.avatar ? user.avatar : '/img/comical.png' " style="width: 70px;height: 70px;border-radius: 50%;object-fit: cover;"></div>
          <!-- 基本信息 -->
          <div class="text">
            <span>账号：</span><span>{{user.account}}</span>
          </div>
          <div class="text">
            <span>邮箱：</span><span>{{user.email}}</span>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 分页组件 -->
    <div class="pagination">
      <el-pagination
        :current-page="1"
        @current-change="currentPageChange"
        :page-size="pageSize"
        :total="total"
        layout="total, prev, pager, next, jumper"
        background>
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      pageSize: 6,
      total: 0,
      userList: [],
    }
  },
  methods: {
    async loadUserList(currentPage){
      let result = await this.$api.User.getUserList({
        currentPage,
        pageSize: this.pageSize
      })
      console.log(result)
      this.userList = result.data.userList
      this.total = result.data.total
    },
    currentPageChange(val){
      this.loadUserList(val)
    },
    handleDelete(userId){
      this.$confirm('确认封禁此用户？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // let result = await User.deleteUser({userId})
        // if(result.data.meta.status === 1688){
          this.$message.success('封禁成功!')
          this.$router.go(0)
        // }else{
        //   this.$message.error(result.msg)
        // }
      }).catch(() => {
        this.$message.info('取消封禁')
      })
    }
  },
  created(){
    this.loadUserList(1)
  }
}
</script>
<style scoped>
.search-box {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.el-card {
  width:330px;
  margin-top: 10px;
}
.user-list-box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.delete-btn {
  float: right; 
  padding: 3px 0;
  color: #ff0509;
}
.user-main {
  text-align: center;
}
.user-main .text {
  text-align: left;
  color:#20a0ff;
  font-size: 12px;
  margin-top: 13px;
}
</style>
