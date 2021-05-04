<template>
  <div class="text-center pt-3">
    <h1>管理登录</h1>
    <div class="container">
      <div class="row justify-content-center m-3">
        <input type="text" v-model="username" placeholder="用户名">
      </div>
      <div class="row justify-content-center m-3">
        <input type="text" v-model="password" placeholder="密码">
      </div>
      <div class="row justify-content-center">
        <button class="btn btn-primary w-25" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      Bmob.User.login(this.username,this.password).then(res => {
        location.href = '/'
      }).catch(err => {
        alert("用户名或密码错误")
      });
    }
  }
}
</script>

<style scoped>

</style>
