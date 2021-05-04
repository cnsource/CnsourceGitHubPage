<template>
  <div>
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div :class="{'carousel-item':true,'active':pos == index}" v-for="(item,index) in banners" data-interval="10000">
          <img :src="item" class="img-responsive img-rounded" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data(){
    return{
      pos:0,
      banners:[
        "https://images.pexels.com/photos/4906139/pexels-photo-4906139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6311128/pexels-photo-6311128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7069387/pexels-photo-7069387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    }
  }
}
</script>

<style scoped>
img{
  height: 50vh;
}
</style>
