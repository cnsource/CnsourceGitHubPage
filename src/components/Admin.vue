<template>
  <div class="container-fluid sticky-top mt-3 bg-white" >
    <div class="row">
      <div class=" col-sm-12 col-md-12 col-lg-12 mb-3 bg-white">

        <div class="clearfix align-center">
          <div class="m-1 d-inline-block">
            <router-link class="nav-link" to="/linkmg" active-class="linkActive">链接管理</router-link>
          </div>
          <div class="m-1 d-inline-block">
            <router-link class="nav-link" to="/passagemg" active-class="linkActive">文章管理</router-link>
          </div>
          <div class="m-1 d-inline-block">
            <router-link class="nav-link" to="/draftmg" active-class="linkActive">草稿管理</router-link>
          </div>
        </div>

<!--        <div class="nav flex-column pb-3 nav-pills border-bottom" id="v-pills-tab" role="tablist" aria-orientation="vertical">-->
<!--         -->
<!--         -->
<!--          <router-link class="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="/linkmg" role="tab" aria-controls="v-pills-home" aria-selected="true">链接管理</router-link>-->
<!--          <router-link class="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="/passagemg" role="tab" aria-controls="v-pills-profile" aria-selected="false">文章管理</router-link>-->
<!--        </div>-->
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
}
</script>

<style scoped>
.nav-link{
  color: white;
  background-color: #264653;
}
.linkActive{
  background-color: #2a9d8f;
}
</style>
