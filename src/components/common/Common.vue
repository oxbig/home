<template>
  <div class="content_common">
      <div class="content_com_item">
         <div class="item_01">
         </div>
         <div class="item_02">
           <div class="item_02_01 pos">
             <img src="../../assets/img/1.jpeg" alt="">
             <div class="album_im"></div>
           </div>
           <div class="item_02_02">
             <div class="item_02_02_01 pos">
               <img src="../../assets/img/2.jpeg" alt="">
               <div class="album_im"></div>
             </div>
             <div class="item_02_02_02 pos">
               <img src="../../assets/img/3.jpeg" alt="">
               <div class="album_im"></div>
             </div>
           </div>
           <div class="item_02_03">
             <div class="item_02_03_01 pos">
               <img src="../../assets/img/4.jpeg" alt="">
               <div class="album_im"></div>
             </div>
             <div class="item_02_03_02 pos">
               <img src="../../assets/img/5.jpeg" alt="">
               <div class="album_im"></div>
             </div>
           </div>
           <div class="item_02_04 pos">
             <img src="../../assets/img/6.jpeg" alt="">
             <div class="album_im"></div>
           </div>
           <div class="item_02_05">
             <div class="item_02_05_01 pos">
               <img src="../../assets/img/7.jpeg" alt="">
               <div class="album_im"></div>
             </div>
             <div class="item_02_05_02 pos">
               <img src="../../assets/img/8.jpeg" alt="">
               <div class="album_im"></div>
             </div>
           </div>
           <div class="item_02_06 pos">
             <img src="../../assets/img/9.jpeg" alt="">
             <div class="album_im"></div>
           </div>
           <div class="item_02_07">
             <div class="item_02_07_01 pos">
               <img src="../../assets/img/10.jpeg" alt="">
               <div class="album_im"></div>
             </div>
             <div class="item_02_07_02 pos">
               <img src="../../assets/img/11.jpeg" alt="">
               <div class="album_im"></div>
             </div>
           </div>
           <div class="item_02_08 pos">
             <img src="../../assets/img/2.jpeg" alt="">
             <div class="album_im"></div>
           </div>
            <div class="loadMore" @click="loadMore">MORE PROJECTS</div>

         </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "common",
    methods:{
      loadMore(){
        alert("点击加载更多···")
        
      }
    }
  }
</script>

<style scoped>
  @import url("../../assets/css/common.css") screen and (min-width: 600px) ;
  @import url("../../assets/css/moddle.css") screen and (max-width: 600px) ;


</style>