<template>
  <div>
    <input type="text" v-model="inpMessage">
    <button @click="handleClick">点击传给子组件</button>
    <xia :message="clickData"></xia>
  </div>
</template>

<script>
  import xia from '../xia/xia'
  export default {
    name: "shang",
    components:{
      xia
    },
    data(){
      return{
        inpMessage:'',
        clickData:''
      }
    },
    methods:{
      handleClick(){
        this.clickData = this.inpMessage
      },
    }
  }
</script>

<style>

</style>
