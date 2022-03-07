<template>
  <div class="content">
    <div class="nav">
    <tabbar-item path="/reside">RESIDENCE</tabbar-item>
    <tabbar-item path="/show">SHOW SPACE</tabbar-item>
    <tabbar-item path="/office">OFFICE & STUDIO</tabbar-item>
    <tabbar-item path="/hotel">HOTEL&CLUB</tabbar-item>
    <tabbar-item path="/others">OTHERS & WORKS</tabbar-item>
  </div>
    <div class="nav_1">
      <tabbar-item path="/reside">RESIDENCE</tabbar-item>
      <tabbar-item path="/show">SHOW SPACE</tabbar-item>
      <tabbar-item path="/office">OFFICE & STUDIO</tabbar-item>
      <tabbar-item path="/hotel">HOTEL&CLUB</tabbar-item>
      <tabbar-item path="/others">OTHERS & WORKS</tabbar-item>
    </div>
    <div class="backTop">
      <a href="#">
        <img src="../../assets/img/back.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import TabbarItem from "../tabbar/TabbarItem"
  export default {
    name: "Tabbar",
    components:{
      TabbarItem
    }
  }
</script>

<style scoped>
  @import url("../../assets/css/tabbar.css") screen and (min-width: 600px);
  @import url("../../assets/css/tabbar_min.css") screen and (max-width: 600px);
</style>