<template>
	<div ref="main" style="width: 400px; height: 400px"></div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import * as $echarts from 'echarts'

const main= ref()
onMounted(() => {
  initEcgarts()
})
const initEcgarts = () => {
  const massEchart = $echarts.init(main.value)
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  massEchart.setOption(option)
}
</script>
