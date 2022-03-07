<template>
  <div class="content">
    <div class="swiper">
      <el-carousel indicator-position="none" height="800px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <common></common>
    </div>

  </div>
</template>

<script>
  import Common from "../components/common/Common"
  export default {
    name: "Office",
    components:{
      Common
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 600px){
    .content{
      width: 100%;
      position: relative;
    }
    .swiper{
      width: 90%;
      position: absolute;
      left: 5%;
      background-color: #fff;
    }

    .el-carousel{
      height: 300px;
      /*position: absolute;*/
      z-index: 10;
    }
    .el-carousel__item{

    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item:nth-of-type(1) {
      /*background-color: #99a9bf;*/
      background-image: url("../assets/img/11.jpeg") ;
    }

    .el-carousel__item:nth-of-type(2) {
      /*background-color: #d3dce6;*/
      background-image: url("../assets/img/10.jpeg");
    }
    .el-carousel__item:nth-of-type(3) {
      /*background-color: #d3dce6;*/
      background-image: url("../assets/img/9.jpeg");
    }
    .el-carousel__item:nth-of-type(4) {
      /*background-color: #d3dce6;*/
      background-image: url("../assets/img/8.jpeg");
    }
  }
  .content{
    width: 100%;
    position: relative;
  }
  .swiper{
    width: 90%;
    position: absolute;
    left: 5%;
    background-color: #fff;

  }
  .el-carousel{
    /*position: absolute;*/
    z-index: 10;
  }
  .el-carousel__item{

  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-of-type(1) {
    /*background-color: #99a9bf;*/
    background-image: url("../assets/img/4.jpeg") ;
  }

  .el-carousel__item:nth-of-type(2) {
    /*background-color: #d3dce6;*/
    background-image: url("../assets/img/5.jpeg");
  }
  .el-carousel__item:nth-of-type(3) {
    /*background-color: #d3dce6;*/
    background-image: url("../assets/img/6.jpeg");
  }
  .el-carousel__item:nth-of-type(4) {
    /*background-color: #d3dce6;*/
    background-image: url("../assets/img/11.jpeg");
  }
</style>