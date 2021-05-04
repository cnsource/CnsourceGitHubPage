<template>
  <div>
    <div class="container shadow-lg">
      <div class="row mb-4" @click.prevent="detail(item.passage.objectId)" >
        <img class="img-fluid col-sm-12 col-md-4 col-lg-3 p-2 rounded"
             :src="item.coverlink"/>
        <div class="col-sm-12 col-md-8 col-lg-9 p-2 irlay">
          <div>
            <h5 class="text-elipsis pl-1 m-0">{{ item.title }}</h5>
          </div>
          <div>
            <p class="text-elipsis-2 pt-2">
              &emsp;&emsp;{{ item.description }}
            </p>
          </div>
          <div class="text-right">
            <span class="time p-1 rounded">{{ item.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassageItem",
  props: {
    item:Object
  },
  methods:{
    detail(objectId){
      this.$router.push({
        path: "/passage/" + objectId
      })
    }
  }
}
</script>

<style scoped>
.row:hover{
  background-color: #e7e7e7;
  cursor: pointer;
}
  img{
    height: 140px;
    object-fit: cover;
  }
  .text-elipsis-2{
    font-size: 0.9em;
    letter-spacing: 1px;
  }
  .time{
    background-color: #f8f8f8;
  }
  .irlay{
    display: grid;
    grid-template-rows: min-content 2fr min-content;
  }

</style>
