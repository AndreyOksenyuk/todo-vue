<template>
   <div>
      <NavMenu v-bind:userName="userName" />
      <router-view />
   </div>
</template>
<script>
import NavMenu from '../components/Navmenu.vue'
export default {
   name: 'todo',
   data(){
      return{
 
      }
   },
   props: ['userName'], 
   components:{
      NavMenu
   },

}
</script>