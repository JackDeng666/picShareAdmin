<template>
  <el-container>
    <el-aside :width="isCollapse ? '64px' : '180px'">
      <el-menu
        mode="vertical"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
        :collapse="isCollapse">
        <!-- 一级菜单 -->
        <el-submenu v-for="item in items" :index="item.name" :key="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <!-- 二级菜单 -->
          <!-- <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex"> -->
            <el-menu-item v-for="(citem,cindex) in item.children" :index="citem.path" :key="cindex" @click="go(citem.path)">
              <template slot="title">
                <i :class="citem.icon"></i>
                <span>{{citem.name}}</span>
              </template>
            </el-menu-item>
          <!-- </router-link> -->
        </el-submenu>
        <el-menu-item @click="logout">
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </el-menu-item>
        <el-menu-item @click="isCollapse = !isCollapse">
          <i class="el-icon-s-operation"></i>
          <span>缩小</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="50px" id="header">
        <!-- <img src="/img/comical.png">
        <img src="/img/comical.png"> -->
        <h2>管理端</h2>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      items: [
        {
          name: "图片管理",
          icon: 'el-icon-picture',
          children: [
            { path: "Picture", name: "图片列表", icon: 'el-icon-s-data' },
            { path: "PicList", name: "图集列表", icon: 'el-icon-s-data' }
          ]
        },
        {
          name: "分类管理",
          icon: 'el-icon-s-grid',
          children: [
            { path: "Category", name: "分类列表", icon: 'el-icon-s-data' }
          ]
        },
        {
          name: "用户管理",
          icon: 'el-icon-s-custom',
          children: [
            { path: "UserList", name: "用户列表", icon: 'el-icon-s-data' }
          ]
        }
      ]
    }
  },
  methods: {
    go(path){
      this.$router.push(path)
    },
    logout() {
      sessionStorage.removeItem("jdAdminToken")
      this.$router.push('/login')
    }
  },
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-main {
  padding: 0 20px;
  background-color: #eaedf1;
}
.el-menu{
  /* width: 180px; */
  height: 100%;
  box-sizing: content-box;
}

#header{
  background: #eaedf1;
  text-align: center;
  position: relative;
}
#header img{
  position: absolute;
  top: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}
#header img:nth-child(1){
  animation: moveL 8s linear infinite;
}
#header img:nth-child(2){
  animation: moveR 8s linear infinite;
}
@keyframes moveL {
  0%{
    left: 0%;
    transform: rotate(0deg)
  }
  2%{
    transform: rotate(-15deg)
  }
  3%{
    transform: rotate(15deg)
  }
  5%{
    transform: rotate(-15deg)
  }
  7%{
    transform: rotate(15deg)
  }
  8%{
    transform: rotate(-15deg)
  }
  10%{
    transform: rotate(15deg)
  }
  12%{
    transform: rotate(-15deg)
  }
  13%{
    transform: rotate(15deg)
  }
  15%{
    transform: rotate(-15deg)
  }
  17%{
    transform: rotate(15deg)
  }
  18%{
    transform: rotate(-15deg)
  }
  20%{
    transform: rotate(15deg)
  }
  22%{
    transform: rotate(-15deg)
  }
  23%{
    transform: rotate(15deg)
  }
  25%{
    transform: rotate(-15deg)
  }
  27%{
    transform: rotate(15deg)
  }
  28%{
    transform: rotate(-15deg)
  }
  30%{
    transform: rotate(15deg)
  }
  35%{
    transform: rotate(-15deg)
  }
  40%{
    transform: rotate(15deg)
  }
  45%{
    transform: rotate(-15deg)
  }
  50%{
    left: 100%;
    transform: rotate(15deg)
  }
  100%{
    left: 0%;
    transform: rotate(0deg)
  }
}
@keyframes moveR {
  0%{
    left: 100%;
    transform: rotate(0deg)
  }
  2%{
    transform: rotate(-15deg)
  }
  3%{
    transform: rotate(15deg)
  }
  5%{
    transform: rotate(-15deg)
  }
  7%{
    transform: rotate(15deg)
  }
  8%{
    transform: rotate(-15deg)
  }
  10%{
    transform: rotate(15deg)
  }
  12%{
    transform: rotate(-15deg)
  }
  13%{
    transform: rotate(15deg)
  }
  15%{
    transform: rotate(-15deg)
  }
  17%{
    transform: rotate(15deg)
  }
  18%{
    transform: rotate(-15deg)
  }
  20%{
    transform: rotate(15deg)
  }
  22%{
    transform: rotate(-15deg)
  }
  23%{
    transform: rotate(15deg)
  }
  25%{
    transform: rotate(-15deg)
  }
  27%{
    transform: rotate(15deg)
  }
  28%{
    transform: rotate(-15deg)
  }
  30%{
    transform: rotate(15deg)
  }
  35%{
    transform: rotate(-15deg)
  }
  40%{
    transform: rotate(15deg)
  }
  45%{
    transform: rotate(-15deg)
  }
  50%{
    left: 0%;
    transform: rotate(15deg)
  }
  100%{
    left: 100%;
    transform: rotate(0deg)
  }
}
#header h2{
  line-height: 50px;
  color: #409eff;
  font-size: 20px;
  font-weight: bold;
}
</style>