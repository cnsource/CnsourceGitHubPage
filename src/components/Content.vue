<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-8 ml-lg-4 mr-lg-4">
          <passage-list class="rounded"></passage-list>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-3">
          <contact-info class="float-lg-right"></contact-info>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import PassageItem from "./PassageItem";
import PassageList from "./PassageList";
import ContactInfo from "./ContactInfo";
export default {
  name: "Content",
  components: {ContactInfo, PassageList, PassageItem, Banner}
}
</script>

<style scoped>

</style>
