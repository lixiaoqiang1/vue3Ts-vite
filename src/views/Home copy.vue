<template>
  <div class="app_container">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <div class="islogo"></div>
          <div class="rightbtn">
            <el-button type="primary" class="ml-2" @click="edit"
              >编辑</el-button
            >
            <el-button @click="layout">退出</el-button>
          </div>
        </el-header>
        <el-container>
          <el-aside width="240px" class="aside">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              @open="handleOpen"
              @select="handleSelect"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>菜单1</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/ceshi">菜单1-1</el-menu-item>
                  <el-menu-item index="/about">菜单1-2</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item index="/ceshi">
                <el-icon><icon-menu /></el-icon>
                <template #title>菜单2</template>
              </el-menu-item>
              <el-menu-item index="/about">
                <el-icon><document /></el-icon>
                <template #title>菜单3</template>
              </el-menu-item>
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// const route = useRoute();
onMounted(() => {
  console.log("onMounted--");
});
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log('handleOpen',key, keyPath);
};
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("handleSelect", key);
  router.push({ path: key });
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log('handleClose',key, keyPath);
};
const edit = () => {
  router.push({ path: "/ceshi" });
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
  background-color: #fff;
}
.header {
  width: 100%;
  border-bottom: 1px #ddd solid;
  height: 80px;
  display: flex;
  justify-content: space-between;
  .islogo {
    width: 40px;
    height: 40px;
    background: #666;
    margin: 20px;
  }
  .rightbtn {
    float: right;
    padding: 24px 15px 0 0;
  }
}
</style>
