<template>
  <div>
    <input type="text" v-model="childrenMessage">
    <!--<button @click="childClick">传值给父组件</button>-->
  </div>
</template>

<script>
  export default {
    name: "xia",
    props:{
      message:String
    },
    data(){
      return{
        childrenMessage:''
      }
    },
    created(){
      this.childrenMessage=this.message
    },
  }
</script>

<style scoped>

</style>
