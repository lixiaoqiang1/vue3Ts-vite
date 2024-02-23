<template>
  <template v-for="item in list" :key="item.path">
    <!-- 存在子级菜单children且不为空 -->
    <el-sub-menu v-if="item?.children && item.children.length" :index="item.path">
      <template #title>
        <el-icon>
          <!--component标签 动态渲染组件,vue提供,is绑定组件名 -->
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
     <!-- 递归调用组件本身 -->
      <MenuList :list="item.children" />
    </el-sub-menu>
    <!-- 只有一级菜单 -->
    <el-menu-item v-else :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps({
  list: Object
})
</script>
