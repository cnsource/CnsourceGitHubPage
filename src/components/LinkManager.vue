<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-10 mx-auto">
        <form>
          <div class="form-group row">
            <div class="col-10 offset-1">
              <label for="exampleInputEmail1"><b>图标名称</b></label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     v-model="Link.name" placeholder="eg:CSDN / Github">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-10 offset-1">
              <label for="exampleInputEmail2"><b>SVG图标</b></label>
              <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
                        v-model="Link.icon" placeholder="请复制svg代码到此处，图形大小-42"/>
              <a class="nav-link" style="font-size: 0.8em" href="https://www.iconfont.cn/" target="_blank">点我去下载图标</a>
              <div class="col-10" v-html="Link.icon"></div>
            </div>
          </div>
          <div class="row">
            <div class="btn-group col-10 offset-1 mt-2 mb-2" role="group" aria-label="Basic example">
              <button type="button" :class="['btn',isActive=='自媒体'?'btn-success':'btn-outline-secondary']"
                      @click="choseType('自媒体')">自媒体
              </button>
              <button type="button" :class="['btn',isActive=='博客'?'btn-success':'btn-outline-secondary']"
                      @click="choseType('博客')">博客
              </button>
              <button type="button" :class="['btn',isActive=='联系方式'?'btn-success':'btn-outline-secondary']"
                      @click="choseType('联系方式')">联系方式
              </button>
              <button type="button" :class="['btn',isActive=='公开群'?'btn-success':'btn-outline-secondary']"
                      @click="choseType('公开群')">公开群
              </button>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-10 offset-1">
              <label for="exampleInputPassword1"><b>链接网址</b></label>
              <input type="url" class="form-control" id="exampleInputPassword1" v-model="Link.url"
                     placeholder="https://www.example.com">
              <small id="emailHelp" class="form-text text-muted">请务必填写完整链接地址.</small>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-10 offset-1 text-right">
              <button class="btn btn-primary" @click.prevent="onSubmit">创建</button>
              <button class="btn btn-danger" @click.prevent="resetLink">清除</button>
            </div>
          </div>
        </form>

      </div>
      <div class="col-sm-12 col-md-11 col-lg-9 mx-auto">
        <table class="table table-responsive-sm table-responsive-md table-borderless table-hover">
          <thead>
          <tr>
            <th>图标</th>
            <th>名称</th>
            <th>类型</th>
            <th>网址</th>
            <th class="text-center">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(link,index) in links">
            <td v-html="link.icon" class="align-middle"></td>
            <td class="align-middle">{{ link.name }}</td>
            <td class="align-middle">{{ link.type }}</td>
            <td class="align-middle">{{ link.url }}</td>
            <td class="align-middle">
              <button class="mx-auto btn btn-danger nav-link" @click="deleteRow(index,link)">移除</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkManager",
  data() {
    return {
      Link: {
        name: '',
        type: '',
        url: ''
      },
      isActive: "",
      resoutmsg: "添加一条数据吧",
      links: [],
    };
  },
  created() {
    this.loadLinks()
  },
  methods: {
    choseType(val) {
      this.Link.type = val;
      this.isActive = val;
    },
    onSubmit() {
      if (this.Link.name == "" || this.Link.type == "" || this.Link.url == "" || this.Link.icon == "") {
        alert("请补充完整数据")
        return
      }
      this.BmobOption.LinkTable.saveLink(this.Link,(res)=>{
        this.resoutmsg = "添加成功，数据id: " + res.objectId
        this.resetLink()
        this.loadLinks()
        this.Link = {}
      },(res)=>{
        alert("保存失败")
      })
    },
    loadLinks() {
     this.BmobOption.LinkTable.findAllLink(null,res=>{
       this.links = res
     })
    },
    deleteRow(index, data) {
      this.BmobOption.LinkTable.deleteLink(data.objectId,res=>{
        this.loadLinks()
      },err=>{
        alert("删除失败")
      })
    },
    resetLink() {
      var type = this.Link.type
      this.Link = {}
      this.Link.type = type
      this.isActive = -1
      this.resoutmsg = "添加一条数据吧"
    }
  }
}
</script>

<style scoped>
td {
  white-space: normal;
  word-break: keep-all;
  min-width: fit-content;
}
</style>
