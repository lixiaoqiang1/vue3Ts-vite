<template>
  <div class="content">
    <el-table :data="tableData" style="width: 100% !">
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="age" label="年龄" width="150" />
      <el-table-column prop="email" label="电子邮件" width="250" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  
  },
  data() {
    return {
      tableData: [
        { name: 'John Doe', age: 25, email: 'johndoe@example.com' },
        { name: 'Jane Smith', age: 30, email: 'janesmith@example.com' },
        { name: 'Mike Johnson', age: 35, email: 'mikejohnson@example.com' },
      ],
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>