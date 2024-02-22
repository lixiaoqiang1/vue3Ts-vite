
<template>
  <!-- <Loading v-if="show2" /> -->
  <router-view></router-view>
</template>
<script setup lang="ts">
// import { ref,onMounted } from 'vue';
// const show2 = ref(true)
// onMounted(()=>{
//   const that = this;
//     that.timer = setInterval(() => {
//       if (document.readyState === 'complete') {
//         that.show2 = false;
//         window.clearInterval(that.timer);
//       }
//     }, 0);
// })
</script>
<style>
body{
  padding: 0;margin: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
