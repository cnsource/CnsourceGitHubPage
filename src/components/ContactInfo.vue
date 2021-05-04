<template>
  <div class="pl-3 mb-3 mt-3 shadow-lg pl-5 pr-5 pt-3 pb-3 rounded-lg container">
    <div class="row">
      <b class="col-12 p-2 mb-1" v-if="wemedia.length > 0">自媒体</b>
      <div class="col-12">
        <a :href="link.url" target="_blank" class="d-inline-block m-1" v-for="link in wemedia" v-html="link.icon">

        </a>
      </div>
    </div>
    <div class="row" v-if="blogs.length > 0">
      <b class="col-12 p-2 mb-1">博客</b>
      <div class="col-12">
        <a :href="link.url" target="_blank" class="d-inline-block m-1" v-for="link in blogs" v-html="link.icon">

        </a>

      </div>
    </div>
    <div class="row" v-if="partnr.length > 0">
      <b class="col-12 p-2 mb-1">合作联系</b>
      <div class="col-12">
        <a :href="link.url" target="_blank" class="d-inline-block m-1" v-for="link in partnr" v-html="link.icon">

        </a>
        <div class="d-inline-block m-1">
          </div>
        <div class="d-inline-block m-1">
        </div>
      </div>
    </div>
    <div class="row" v-if="groups.length > 0">
      <b class="col-12 p-2 mb-1">公开群</b>
      <div class="col-12">
        <a :href="link.url" target="_blank" class="d-inline-block m-1" v-for="link in groups" v-html="link.icon">

        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      blogs: [],
      wemedia: [],
      partnr: [],
      groups: []
    }
  },
  mounted() {
    this.getContact();
  },
  methods: {
    getContact() {
      this.BmobOption.LinkTable.findAllLink("博客",res=>{
        this.blogs = res
      })
      this.BmobOption.LinkTable.findAllLink("自媒体",res=>{
        this.wemedia = res
      })
      this.BmobOption.LinkTable.findAllLink("联系方式",res=>{
        this.partnr = res
      })
      this.BmobOption.LinkTable.findAllLink("公开群",res=>{
        this.groups = res
      })
    }
  }
}
</script>

<style scoped>
a:hover{
  border-radius: 21px;
   box-shadow: #ee6c4d   0px 0px 10px;
}
</style>
