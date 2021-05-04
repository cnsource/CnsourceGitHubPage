<template>
  <div class="container">
    <div class="row">
      <passage-card class="clo-sm-12 col-md-4 col-lg-3 mb-3"
                    @delevent="deleteDraft"
                    v-for="item in drafts" :passage="item"
                    :key="item.objectId"></passage-card>
    </div>
  </div>
</template>

<script>
import PassageCard from "./PassageCard";
export default {
  name: "DraftManager",
  components: {PassageCard},
  data(){
    return{
      drafts:[]
    }
  },
  mounted() {
    this.getDraftList()
  },
  methods:{
    getDraftList() {
      this.BmobOption.PsList.findAllDraft(res=>{
        this.drafts = res
      })
    },
    deleteDraft(objectId){
      for(let i = 0;i<this.drafts.length;i++){
         if ( this.drafts[i].objectId == objectId){
           this.drafts.splice(i,1)
         }
      }
    }
  }
}
</script>

<style scoped>

</style>
