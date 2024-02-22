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
                  <span>模型训练</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/ceshi">训练1-1</el-menu-item>
                  <el-menu-item index="/about">训练1-2</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item index="/ceshi">
                <el-icon><icon-menu /></el-icon>
                <template #title>数据集管理</template>
              </el-menu-item>
              <el-menu-item index="/about">
                <el-icon><document /></el-icon>
                <template #title>大语言模型</template>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <!-- <el-aside width="210px" class="aside-wrapper">
            <el-scrollbar>
              <el-menu :default-active="defaultActive" mode="vertical" :collapse-transition="false" router class="menu-wrapper">
                <el-sub-menu v-for="menu in menus" :key="menu.path" :index="menu.path">
                  <template #title>
                    <el-icon><component :is="menu.meta.icon" /></el-icon>
                    <span>{{ menu.name }}</span>
                  </template>
                  <el-menu-item v-if="menu.children.length>0" v-for="child in menu.children" :key="child.path" :index="child.path">
                    <template #title>
                      <el-icon><component :is="child.meta.icon" /></el-icon>
                      <span>{{ child.name }}</span>
                    </template>
                  </el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-scrollbar>
          </el-aside> -->
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
// import { loge } from "~/assets/images/logo1.png"
const router = useRouter();
// const route = useRoute();
onMounted(() => {
  console.log("onMounted--");
});
const defaultActive = ref(0)
// const loge =  = ref(loge)
const menus = [
{
    
    name:'菜单1',
    path:'/ceshi',
    meta:{icon:''},
    children:[
      {
        name:'菜单1',
        path:'/ceshi',
        meta:{icon:''},
      }
    ],
  },
  {
    name:'菜单2',
    path:'/about',
    meta:{icon:''},
  },
]
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
