<template>
  <div>
    <div class="container-fluid">
      <div class="row bg-white">
        <div class="col-sm-12 col-md-10 col-lg-10 m-auto text-center pt-3">
            <button class="btn btn-primary mb-4 btn-block" type="button" data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false" aria-controls="collapseExample">
              填写基本信息
            </button>
            <div class="collapse show" id="collapseExample">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-12 col-md-2 col-lg-2">
                    <el-upload
                      class="avatar-uploader"
                      action=""
                      :show-file-list="true"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                      :http-request="uploadCover">
                      <img v-if="isUped" :src="netImg" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                  </div>
                  <div class="col-sm-12 col-md-8 col-lg-8 offset-md-2 offset-lg-2 text-right">
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" v-model="plist.title" placeholder="标题">
                    </div>
                    <div class="input-group mb-3">
                  <textarea style="height: 100px" type="text" class="form-control" v-model="plist.description"
                            placeholder="简介"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-left">
                    <el-link :href="plist.coverlink" target="_blank" :underline="false" class="w-75 text-left"
                             type="success">
                      封面链接:{{
                        plist.coverlink
                      }}
                    </el-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="row sticky-top bg-white v-center mb-3" style="z-index: 99999">
        <div class="container-fluid">
          <div class="row">
            <div class="col-11 text-right">
              <div class="btn-group m-2" style="height: fit-content" role="group">
                <div class="btn btn-bg" @click="savePassage(false)">
                  <div class="svg-align">
                    <svg t="1619178963987" class="icon" viewBox="0 0 1553 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         p-id="11896" width="26" height="26">
                      <path
                        d="M1057.227034 0.105931A487.600552 487.600552 0 0 0 709.737931 146.39669a331.917241 331.917241 0 0 0-118.324965-21.186207 362.425379 362.425379 0 0 0-339.544276 257.05931 307.764966 307.764966 0 0 0-241.558069 234.036966 346.712276 346.712276 0 0 0 56.743724 288.909241 289.227034 289.227034 0 0 0 230.929655 118.360276h378.385655a30.649379 30.649379 0 0 0 30.649379-30.649379v-134.179311a30.790621 30.790621 0 0 0-30.967172-30.684689c-121.467586 0.670897-138.310621 4.201931-165.958621-24.081656a78.353655 78.353655 0 0 1 1.271173-109.885793c264.827586-264.827586 256.953379-267.934897 300.314483-267.934896s35.84 3.001379 300.420413 267.970207a78.283034 78.283034 0 0 1-45.903448 133.225931v0.600276h-128.635586a30.68469 30.68469 0 0 0-30.68469 30.684689v134.426483a30.649379 30.649379 0 0 0 30.68469 30.649379h92.19531c9.110069 0.317793 18.220138 0.600276 27.330207 0.600276 9.675034 0 19.703172-0.282483 29.095724-0.918069a504.055172 504.055172 0 0 0 467.014621-484.669793c0.317793-8.509793 0.317793-17.655172 0.317793-26.412138A504.937931 504.937931 0 0 0 1057.227034 0.105931z"
                        p-id="11897" fill="#ff6b6b"></path>
                    </svg>
                  </div>
                  <div class="btn-align">
                    保存
                  </div>
                </div>
                <div class="btn btn-bg" @click="savePassage(true)">
                  <div class="svg-align">
                    <svg t="1619179317929" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         p-id="16574" width="26" height="26">
                      <path
                        d="M188.714667 774.570667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V149.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h582.570667a42.666667 42.666667 0 0 1 42.666666 42.666666v60.714667H231.381333a42.666667 42.666667 0 0 0-42.666666 42.666667v521.856z"
                        fill="#82C4FF" p-id="16575"></path>
                      <path
                        d="M637.994667 645.994667l-61.461334 54.016a21.333333 21.333333 0 0 0 28.16 32.042666l104.106667-91.456a21.333333 21.333333 0 0 0-0.042667-32.064l-104.085333-91.264a21.333333 21.333333 0 1 0-28.117333 32.064l61.568 53.994667h-186.304a21.333333 21.333333 0 1 0 0 42.666667h186.176zM874.666667 918.421333H292.096a42.666667 42.666667 0 0 1-42.666667-42.666666V313.429333a42.666667 42.666667 0 0 1 42.666667-42.666666H874.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v562.346667a42.666667 42.666667 0 0 1-42.666666 42.666667z"
                        fill="#0287FF" p-id="16576"></path>
                    </svg>
                  </div>
                  <div class="btn-align">
                    发布
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-auto">
            <div id="toolbar" class="m-auto"></div>
          </div>
        </div>

      </div>

      <div class="row">
        <div id="editorarea" class="mb-2 col-sm-12 col-md-10 col-lg-10 offset-md-1 offset-lg-1 "></div>
      </div>
    </div>

  </div>

</template>

<script>
import E from 'wangeditor'
export default {
  name: "Edit",
  data() {
    return {
      isUped:false,
      netImg:"",
      editor: null,
      isShow: true,
      passage: {
        content: ""
      },
      plist: {
        coverlink: ""
      },
      tocken: "",
      progress: 0,
      isedit: false,
    }
  },
  mounted() {
    this.getTocken()
    var _this = this
    const editor = new E("#toolbar", "#editorarea")
    editor.config.height = 490
    editor.config.uploadImgMaxSize = 20 * 1024 * 1024;
    editor.config.uploadImgMaxLength = 1
    editor.config.customUploadImg = function (resultFiles, insertImgFn) {
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      _this.Qiniu.Upload.uploadImg(resultFiles[0], _this.tocken, function (url) {
        insertImgFn(url)
        this.getTocken()
      }, function (err) {
        console.log(err)
      })
    }
    editor.config.onchange = (newHtml) => {
      this.passage.content = newHtml
    }
    editor.create()
    this.editor = editor;
    if (this.$route.params.lid != null && this.$route.params.pid != null) {
      this.isedit = true
      this.BmobOption.PsList.findPList(this.$route.params.lid, res => {
        this.isUped = true
        this.netImg = res.coverlink
        this.plist = res
      })
      this.BmobOption.Passage.findOnePassage(this.$route.params.pid, res => {
        this.passage = res
        this.editor.txt.html(this.passage.content)
      }, err => {
        console.log(err);
      })
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.netImg = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = true;
      const isLt2M = file.size / 1024 / 1024 < 10;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    checkPassage() {
      if (this.plist.coverlink != "" && this.plist.title != "" && this.passage.content != "") {
        return true
      }
      alert("请完善基本信息")
      return false
    },
    uploadCover(files) {
      this.Qiniu.Upload.uploadImg(this.imgfile, this.tocken, (url) => {
        this.isUped = true
        this.netImg = url
        this.plist.coverlink = url
      }, (err) => {
        console.log(err)
      }, (precent) => {
        this.progress = precent
        this.plist.coverlink = "上传进度" + Math.ceil(precent) + "..."
      })
    },
    getTocken() {
      this.axios.get('https://qnt.cotubo.cn:7443/vuepage').then((response) => {
        this.tocken = response.data
      })
    },
    getFilelistitem(url) {
      var fnames = url.lastIndexOf("/")
      var fnamee = url.lastIndexOf(".")
      var fname = url.substring(fnames + 1, fnamee)
      var pic = {}
      pic.name = fname
      pic.url = url
      return pic;
    },

    //是更新还是保存，变量isEditor
    savePassage(tag) {
      if (this.checkPassage()) {
        this.plist.type = tag
        if (this.isedit) {
          this.BmobOption.PsList.updatePList(this.plist, res => {

          }, err => {

          })
          this.BmobOption.Passage.updatePassage(this.passage, res => {

          }, err => {

          })
          alert("更新成功")
        } else {
          this.BmobOption.Passage.savePassage(this.passage, passage => {
            this.BmobOption.PsList.savePList(this.plist, tag, passage, res => {
                alert((tag ? "文章" : "草稿") + "保存成功")
              },
              err => {
                alert((tag ? "文章" : "草稿") + "保存失败")
                console.log(err);
              }
            )
          }, err => {
            alert("保存失败")
            console.log(err);
          })
        }
      }
    },
  }
}
</script>

<style scoped>

.btn-bg {
  vertical-align: middle;
  background-color: #edf2fb;
}

.btn-bg:hover {
  background-color: #abc4ff;
}

.svg-align {
  vertical-align: top;
  display: inline-block;
}

.btn-align {
  display: inline-block;
  padding-top: 4px;
}

#editorarea {
  cursor: text;
  text-align: left;
  border: 1px solid #ccc;
  min-height: 490px;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
