<template>
  <div class="mt-2">
    <div v-for="p in passages" class="row">
      <passage-item :item="p" class="col-sm-12 col-md-10 col-lg-10 mx-auto"></passage-item>
    </div>
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
</template>

<script>
import PassageItem from "./PassageItem";
export default {
  name: "PassageList",
    components: {PassageItem},
    data(){
      return{
        count: 0,
        currentPage: 1,
        passages: []
      }
    },
    mounted() {
      this.getPassageCount();
      this.getPassageList(1)
    },
    methods:{
      pageChange(val) {
        this.getPassageList(val)
      },
      getPassageCount() {
        this.BmobOption.PsList.findPsList((res)=>{
          this.count = res.length
        })
      },
      getPassageList(val) {
        val--;
        this.BmobOption.PsList.findPsLByPage(true,10,val,(res)=>{
          this.passages = res
        })
      }
    }
}
</script>

<style scoped>

</style>
