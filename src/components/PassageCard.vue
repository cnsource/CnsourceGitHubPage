<template>
  <div>
    <el-card class="box-card" shadow="hover" :body-style="bodystyle">
      <div slot="header">
        <h6 v-text="passage.title" class="text-elipsis">passage-title</h6>
        <div class="text text-elipsis-2">
          {{ passage.description }}
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <el-image
              style="width: 100%; height: 130px"
              :src="passage.coverlink"
              fit="cover"></el-image>
          </div>
        </div>
        <div class="row">
          <div class="col-12 p-2 pr-3">
            <span class="float-right">
              <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                <el-button type="success" icon="el-icon-edit" circle
                           @click="edit(passage.objectId,passage.passage.objectId)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="查看" placement="top">
                <el-button type="primary" class="m-0" icon="el-icon-document" circle
                           @click="passageDetail(passage.passage.objectId)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="删除" placement="top">
                <el-popover
                  placement="right"
                  width="180"
                  v-model="visible">
                  <p>确定要删除这篇文章么？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                    <el-button type="primary" size="mini"
                               @click="deletePassage(passage.objectId,passage.passage.objectId)">确定</el-button>
                  </div>
                  <el-button type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
                </el-popover>
              </el-tooltip>
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PassageCard",
  props: {
    passage: Object
  },
  data() {
    return {
      visible: false,
      bodystyle: {
        padding: '0px'
      }
    }
  },
  methods: {
    edit(lid, pid) {
      console.log("edit", lid, pid)
      this.$router.push({
        path: "/edit/" + lid+"/"+pid
      })
    },
    passageDetail(pid) {
      this.$router.push({
        path: "/passage/" + pid
      })
    },
    deletePassage(lid, pid) {
      var l = null;
      var p = null;
      this.BmobOption.PsList.deletePList(lid,(res)=>{
          this.$emit("deleteDraft",lid)
          l = res
          delresult(l, p)
      },(err)=>{})
     this.BmobOption.Passage.deletePassage(pid,(res)=>{
         p = res

         delresult(l, p)
     },(err)=>{

     })
      this.visible = false
    },
    delresult(list, pasg) {
      if (list == null || pasg == null) {

      } else {

        this.opentip("已成功删除", "success")
      }
    },
    opentip(msg, t) {
      this.$message({
        message: msg,
        type: t
      });
    },
  }
}
</script>

<style scoped>
.text {
  height: 35px;
  font-size: 0.8em;
}
</style>
