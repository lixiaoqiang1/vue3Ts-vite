<template>
    <div class="login-container">
      <h2>登录</h2>
      <form @submit.prevent="submitForm">
        <el-form :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.username" placeholder="用户名" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" type="password" placeholder="密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="submit" @click="$router.push('/')">登录</el-button>
          </el-form-item>
        </el-form>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
//   import { ElForm, ElFormItem, ElInput, ElButton } from 'element-ui';
  
  export default defineComponent({
    name: 'LoginPage',
    components: {
    //   ElForm,
    //   ElFormItem,
    //   ElInput,
    //   ElButton,
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        error: '',
      };
    },
    methods: {
      submitForm() {
        // 在这里执行登录逻辑
        console.log('用户名:', this.form.username);
        console.log('密码:', this.form.password);
      },
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  h2 {
    text-align: center;
  }
  
  form {
    margin-top: 20px;
  }
  
  .el-form-item {
    margin-bottom: 10px;
  }
  
  .el-button {
    padding: 5px 10px;
  }
  
  .error-message {
    color: red;
    text-align: center;
  }
  </style>