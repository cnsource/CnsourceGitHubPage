<template>
  <div style="z-index: 88888">
    <nav class="navbar navbar-expand-sm navbar-light bg-toolbar pt-0 pb-0 pl-3 pr-3">
      <a class="brand" :href="loginpath">Cnsource</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-0" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li :class="{'nav-link':true,'active':isActive==='home'}" @click="toolbarClick('home')">
            <a @click="closeNav" class="nav-link" href="#/content">首页</a>
          </li>
          <li v-if="loginState" :class="{'nav-link':true,'active':isActive==='manager'}" @click="toolbarClick('manager')">
            <a @click="closeNav" class="nav-link" href="#/admin">管理</a>
          </li>
          <li v-if="loginState" :class="{'nav-link':true,'active':isActive==='edit'}" @click="toolbarClick('edit')">
            <a @click="closeNav" class="nav-link" href="#/edit">写稿子</a>
          </li>
          <li v-if="loginState" :class="{'nav-link':true,'active':isActive==='logout'}" @click="toolbarClick('logout')">
            <a @click="closeNav" class="nav-link" href="#/" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "ToolBar",
  data(){
    return{
      loginState:false,
      isActive:"home",
      loginpath:"#/login"
    }
  },
  mounted() {
    this.tablink(this.$route.path)
    let current = Bmob.User.current()
    if (current!=null){
      this.loginpath = "#/"
      this.loginState = true
    }else {
      this.loginpath = "#/login"
      this.loginState = false
    }
  },
  methods:{
    closeNav(){
      $("#navbarText").collapse('hide')
    },
    logout(){
      if(confirm("确定要退出登录么？")){
        Bmob.User.logout()
        location.href = '/'
      }
    },
    toolbarClick(value){
      this.isActive = value
    },
    tablink(path){
      switch (path){
        case '/linkmg':;
        case '/passagemg':
          this.isActive = 'manager'
          break;
        case '/edit':
          this.isActive = 'edit'
          break;
        case '/content':
          this.isActive = 'home'
          break;
        default:
          this.isActive = 'home'
      }
    }
  },
  watch:{
    $route(to,from){
      this.tablink(this.$route.path)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');
.navbar-nav{
  font-size: 1.2em;
  font-weight: 500;
}
.bg-toolbar{
  background-color: white;
}
.brand{
  cursor: pointer;
  text-decoration: none;
  color: #ff6b6b;
  font-size: 2em;
  font-family: 'Cairo', sans-serif;
}
nav-link:hover{
  color: #ee6c4d;
}
</style>
