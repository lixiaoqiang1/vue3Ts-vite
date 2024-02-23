<template>
  <div class="content">home
    <h1>名字：{{person.name}}--年龄：{{person.age}}</h1>
    {{ data }}
    
    <el-button @click="ageGrow">btn</el-button>
  </div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from "vue"
import {useStore} from 'vuex'
const data = ref(0)
const store = useStore()    //获取store对象
let person = store.getters.getPerson 
onMounted(()=>{
  console.log('1111111111')
})
function ageGrow(){
  person.age++
  store.dispatch('ageGrow', person.age)
  //通过dispatch来调用actions里的'ageGrow'方法，参数为ageGrowth
  //actions的方法又会通过commit来调用mutations里的方法，从而引起状态(数据)的变化
  //也可以在组件里跳过dispatch actions，直接store.commit
}
</script>
