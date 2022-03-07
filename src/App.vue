<template>
  <div id="app">
    <div id="nav">
         <tabbar></tabbar>
         <drawer></drawer>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import Drawer from "./components/common/Drawer"
  import Tabbar from './components/tabbar/Tabbar'
  export default {
    name:'App',
    components:{
      Tabbar,
      Drawer
    }
  }
</script>
<style>
@import "assets/css/base.css";

</style>
