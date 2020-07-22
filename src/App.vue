<template>
  <div id="app"> 
      <router-view 
        @user-name="UserName"
        v-bind:userName="userName"
      />
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      userName: 'User'
    }
  },  
  methods:{
    UserName(name){
       this.userName = name     
    }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  background-color: rgba(194, 255, 255, 0.418);
}
</style>

<style scoped>

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #001058;
}
</style>
