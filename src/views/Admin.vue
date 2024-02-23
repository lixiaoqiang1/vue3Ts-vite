<template>
  <div class="app_container">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <div class="islogo">
            <img src="../assets/images/headerLogo.png" />
          </div>
          <div class="rightbtn">
            <el-button type="primary" class="ml-2" @click="edit"
              >编辑</el-button
            >
            <el-button @click="layout">退出</el-button>
          </div>
        </el-header>
        <el-container>
          <el-aside width="240px" class="aside">
            <el-menu :collapse="isCollapse" unique-opened router>
              <MenuList :list="store.getters.menuData" />
            </el-menu>
          </el-aside>
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

const isCollapse = ref(false);

onMounted(() => {
  console.log("onMounted--");
  store.dispatch('setMenusData', '')
});
const edit = () => {
  router.push({ path: "/about" });
};
const layout = () => {
  console.log("layout");
  router.push({ path: "/login" });
};
</script>

<style scoped lang="scss">
/* 手动配置全局样式 */
html,
body,
.app_container,
.el-container {
  padding: 0;
  margin: 0;
  height: 100vh;
}
/* 背景颜色 */
.aside {
//   border-right: 1px #ddd solid;
  .el-menu {
    border-right: 0;
  }
}
.main {
  background-color: #f8f8f8;
  padding: 15px;
}
.header {
  width: 100%;
  border-bottom: 1px #ddd solid;
  height: 80px;
  display: flex;
  justify-content: space-between;
  .islogo {
    // width: 40px;
    height: 40px;
    // background: #666;
    margin: 20px;
    img{
      height: 100%;
    }
  }
  .rightbtn {
    float: right;
    padding: 24px 15px 0 0;
  }
}
</style>
