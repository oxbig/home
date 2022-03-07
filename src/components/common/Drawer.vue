<template>
  <div>
    <el-button @click="drawer = true"  id="drawer" >
      <img src="../../assets/img/more.png" alt="">
    </el-button>
    <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :direction="direction"
            >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    name: "Drawer",
    data() {
      return {
        drawer: false,
        direction: 'ttb',
      };
    },
    methods: {

    }
  }
</script>

<style scoped>
#drawer{
  position: fixed;
  top: 50px;
  right: 58px;
  border: 0;

}
</style>