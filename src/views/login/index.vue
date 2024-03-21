<template>
  <div class="login-container">
     <el-form :model="ruleForm2" :rules="rules2"
      status-icon
      ref="ruleForm2" 
      label-position="left" 
      label-width="0px" 
      class="demo-ruleForm color-green">
         <h3 class="title">系统登录</h3>
         <el-form-item prop="username">
             <el-input type="text" 
                 v-model="ruleForm2.username" 
                 auto-complete="off" 
                 placeholder="用户名"
             ></el-input>
         </el-form-item>
             <el-form-item prop="password">
                 <el-input type="password" 
                     v-model="ruleForm2.password" 
                     auto-complete="off" 
                     placeholder="密码"
                 ></el-input>
             </el-form-item>
         <el-checkbox 
             v-model="checked"
             class="rememberme"
         >记住密码</el-checkbox>
         <el-form-item style="width:100%;" class="group-list">
            <el-button type="primary" style="width:100%;" @click="ceshi" :loading="logining">测试</el-button>
            <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
         </el-form-item>
     </el-form>
 </div>
</template>

<script>
import { getCurriculumsList } from '@/api/login.ts'
export default {
  data(){
     return {
         logining: false,
         ruleForm2: {
             username: 'admin',
             password: '123456',
         },
         rules2: {
             username: [{required: true, message: '请输入账号', trigger: 'blur'}],
             password: [{required: true, message: '请输入密码', trigger: 'blur'}]
         },
         checked: false
     }
 },
 methods: {
    ceshi(){
        const json = {
            model:'report765',
            token:'1',
            service:'rpc.search_read',
        }
        getCurriculumsList(json).then(res=>{
            console.log(res)
        })
    },
     handleSubmit(event){
         this.$refs.ruleForm2.validate((valid) => {
             if(valid){
                 this.logining = true;
                 if(this.ruleForm2.username === 'admin' && 
                    this.ruleForm2.password === '123456'){
                        this.logining = false;
                        sessionStorage.setItem('user', this.ruleForm2.username);
                        this.$router.push({path: '/home'});
                 }else{
                     this.logining = false;
                     this.$alert('用户名或密码错误!', '提示', {
                         confirmButtonText: 'ok'
                     })
                 }
             }else{
                 console.log('error submit!');
                 return false;
             }
         })
     }
 }
}
</script>

<style scoped lang="scss">

.login-container {
 width: 100%;
 height: 100vh;
 background: gray;

 /* 登录框上下对齐 */
 display: flex;
 justify-content: center;
 align-items: center;
 .demo-ruleForm {
    background: white;
    padding: 50px 60px;
    border-radius: 8px;
    width: 450px;
    .title{
        color: #333;text-align: center;font-weight: bold;line-height: 50px;
    }
    .el-form-item{
        margin: 10px 0;
    }
 }
}
.login-page {
 -webkit-border-radius: 5px;
 border-radius: 5px;
 margin:0px auto;
 width: 350px;
 padding: 20px 35px 35px 15px;
 background: #fff;
 border: 1px solid #eaeaea;
 box-shadow: 0 0 25px #cac6c6;
}
/* label.el-checkbox.rememberme {
 margin: 0px 0px 15px;
 text-align: left;
} */
.group-list{
    // background-color: #eee;
    .el-button{
        margin: 10px 0;
    }
}
</style>