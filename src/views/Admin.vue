<template>
  <div class="app_container">
    <div class="common-layout">
      <el-container>
        <el-aside width="240px" class="aside">
          <div class="islogo">
            <img src="../assets/images/headerLogo.png" />
          </div>
          <el-menu :collapse="isCollapse" unique-opened router>
            <MenuList :list="store.getters.menuData" />
          </el-menu>
        </el-aside>
        <el-container class="container-r">
          <div class="header-out">
            <el-header class="header">
              <div class="group-btn">
                <el-button type="primary" class="ml-2" @click="clickCollapse"
                  >编辑</el-button
                >
              </div>
              <div class="rightbtn">
                <el-button type="primary" class="ml-2" @click="edit"
                  >编辑</el-button
                >
                <el-button @click="layout">退出</el-button>
              </div>
            </el-header>
          </div>
          
          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import {useStore} from 'vuex'
const store = useStore()    //获取store对象
const router = useRouter();

let isCollapse = ref(false);

onMounted(() => {
  console.log("onMounted--");
  store.dispatch('setMenusData', '')
  setData()
});
const edit = () => {
  router.push({ path: "/about" });
};
const layout = () => {
  console.log("layout");
  router.push({ path: "/login" });
};
function setData (){
  console.log('setData')
}
function clickCollapse(){
  console.log('111',isCollapse.value)
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang="scss">
/* 手动配置全局样式 */
html,body,.app_container,.el-container {
  padding: 0;
  margin: 0;
  height: 100vh;
}
/* 背景颜色 */
.aside {
  border-right:1px #eee solid;
  .islogo {
    height: 70px;
    background: azure;
    img{
      height: 30px;
      margin: 20px 0 0 20px;
    }
  }
  .el-menu {
    border-right: 0;
  }
}
.container-r{
  display: inline-block;
}
.header-out{
  width: 100%;
  padding-top: 70px;
  position: relative;
  border-bottom: 1px #eee solid;
}
.header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 99;
  height: 70px;
  display: flex;
  justify-content: space-between;
  .group-btn{
    padding: 19px 15px 0 0;
  }
  .rightbtn {
    padding: 19px 15px 0 0;
  }
}
.main {
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f8f8f8;
  padding: 15px;
}
</style>
