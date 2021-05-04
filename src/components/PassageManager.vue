<template>
  <div>
    <div class="container-fluid">
      <div class="row  d-none d-md-block d-lg-block p-3">
        <div class="pagination justify-content-center">
          <el-pagination
            background
            @current-change="pageChange"
            :current-page="currentPage"
            layout="total, prev, pager, next"
            :total="count">
          </el-pagination>
        </div>
      </div>
      <div class="row p-0 m-auto">
        <passage-card class="clo-sm-12 col-md-4 col-lg-3 mb-3" v-for="item in passages" :passage="item"
                      :key="item.objectId"></passage-card>
      </div>
      <div class="row justify-content-center d-lg-none d-md-none p-3">
        <el-backtop :bottom="50"></el-backtop>
        <div class="pagination justify-content-center">
          <el-pagination
            small
            background
            :page-count="5"
            @current-change="pageChange"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="count">
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PassageItem from "./PassageItem";
import PassageCard from "./PassageCard";

export default {
  name: "PassageManager",
  components: {PassageCard, PassageItem},
  data() {
    return {
      count: 0,
      currentPage: 1,
      passages: []
    }
  },
  mounted() {
    this.getPassageCount();
    this.getPassageList(1)
  },
  methods: {
    pageChange(val) {
      console.log(val)
      this.getPassageList(val)
    },
    getPassageCount() {
      this.BmobOption.PsList.findPsList(res=>{
        this.count = res.length
      })
    },
    getPassageList(val) {
      val--;
     this.BmobOption.PsList.findPsLByPage(true,8,val,res=>{
       this.passages = res
     })
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 0.9em;
}

.box-card {
  width: 480px;
}
</style>
