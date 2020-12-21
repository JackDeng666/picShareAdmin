<template>
  <div>
    <el-table :data="pictureList" border>
      <el-table-column label="图片" align="center">
        <template slot-scope="scope">
          <el-image
            class="el-img"
            style="width: 50px; height: 50px"
            :src="scope.row.thumbnailUrl"
            fit="cover">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="用户ID" prop="userId"></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-view" @click="lock(scope.row.pictureId, scope.row.enable)">{{scope.row.enable == 0 ? "解封" : "封禁"}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="review">
      <img src="" alt=""/>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data() {
      return {
        pictureList: []
      }
    },
    methods: {
      async getData() {
        let res = await this.$api.Pic.getPicList({
          currentPage: 1,
          pageSize: 10
        })
        console.log(res)
        this.pictureList = res.data
        this.pictureList.forEach(el => {
          el.thumbnailUrl = this.$basicUrl + el.thumbnailUrl
          el.status = el.enable == 0 ? "封禁中" : "放开中"
        })
        setTimeout(() => {
          $('.el-image img').on('click', function(){
            var url = $(this).attr('src')
            $('.review img').attr('src',url)
            $('.review').fadeIn(500)
          });
          $('.review').click(function(){
            $('.review').fadeOut(500)
          })
        }, 1000)
      },
      async lock(id, enable){
        let res = await this.$api.Pic.updatePicture({
          pictureId: id,
          enable: enable == 0 ? 1 : 0
        })
        this.getData()
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>
.review {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0, .1);
  text-align: center;
  display: none;
  cursor: -webkit-zoom-out;
  cursor: zoom-out;
}
.review img {
  max-width: 70%;
  max-height: 100vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
</style>