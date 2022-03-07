<template>
  <div class="content_item" @click="itemClick" :style="activeStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props:{
      path:{
        type:String
      },
      activeColor:{
        type: String,
        default:"#000"
      }
    },
    methods:{
      itemClick(){
        console.log("------");
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    }
  }
</script>

<style scoped>
  .content_item {
    cursor: pointer;
  }
</style>