<template>
  <div class="navMenu">

    <template v-for="navMenu in navMenus">
        <!-- 最后一级菜单 -->
      <el-menu-item v-if="!navMenu.children" :key="navMenu.id" :data="navMenu" :index="navMenu.path">
        <!-- <i :class="navMenu.icon"></i> -->
        <!-- <img class="iconImg" :src="navMenu.icon" /> -->
        <span slot="title">{{navMenu.title}}</span>
      </el-menu-item>
      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="navMenu.children" :key="navMenu.id" :data="navMenu" :index="navMenu.path">
        <template slot="title">
          <!-- <i :class="navMenu.icon"></i> -->
          <!-- <img class="iconImg" :src="navMenu.icon" /> -->
          <span> {{navMenu.title}}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.children"></NavMenu>
      </el-submenu>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
.navMenu{
  li{
    // padding-left: 30px !important;
    .iconImg{
      // position: absolute;
      width: 20px;
      // left: 0;
      // top: 0;
      // bottom: 0;
      // margin: auto;
      float: left;
    }
  }
}
</style>
