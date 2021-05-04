<template>
  <div class="container mt-3">
    <div class="row">
      <div v-html="passage.content" class="text-atuo-break col-12 mb-5">
      </div>
      <div style="text-align:center;font-weight: 500;background-color: #eaeaea"
           class="p-2 col-12 fixed-bottom">
        {{ passage.createdAt }}
      </div>
      <div class="floatbtn" @click="back">
        <svg t="1619171886674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="8348" width="42" height="42">
          <path
            d="M512.005001 0C228.033403 0 0 228.033403 0 512.005001s228.033403 511.994999 512.005001 511.994999 511.994999-228.033403 511.994999-511.994999S795.926591 0 512.005001 0z m-2.450359 965.211388c-249.416536 0-455.656747-206.250212-455.656747-455.656746S260.138106 53.897895 509.554642 53.897895 965.211388 260.138106 965.211388 509.554642c0 254.207237-206.250212 455.656747-455.656746 455.656746z"
            fill="#ff6b6b" p-id="8349"></path>
          <path
            d="M762.271661 476.739835H403.289076l92.013478-95.604005c13.812023-14.342101 13.812023-38.245602 0-52.587703a35.15515 35.15515 0 0 0-50.617415 0L292.842897 486.301236c-13.812023 14.342101-13.812023 38.245602 0 52.587703l151.872247 157.76311c4.600674 4.770699 13.802022 9.551399 23.003369 9.551399s18.402696-4.7807 23.00337-9.551399c13.812023-14.342101 13.812023-38.245602 0-52.587704l-92.013478-95.614006h358.962582c18.402696 0 36.815393-14.342101 36.815393-38.245602s-13.812023-33.464902-32.214719-33.464902z"
            fill="#ff6b6b" p-id="8350"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassageDetail",
  data() {
    return {
      passage: {
        content: "",
        createdAt: ""
      }
    }
  },
  mounted() {
    this.getPassage(this.$route.params.objectId)
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    getPassage(objectId) {
     this.BmobOption.Passage.findOnePassage(objectId,(res)=>{
       this.passage = res;
     },(err)=>{
       console.log(err);
     })
    }
  }
}
</script>

<style scoped>
.text-atuo-break{
  letter-spacing: 1px;
}
.floatbtn{
  background-color: white;
  border-radius: 24px;
  position: fixed;
  right: 2rem;
  bottom: 5rem;
}
</style>
