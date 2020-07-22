<template>
   <form @submit.prevent="onSubmit" >
      <input type="text"  v-model="title">
      <button type="submit">Add</button>
   </form>
</template>
<script>
export default {
   data(){
      return{
          title: '',
      }
   },
   methods:{
      onSubmit(){
         if (this.title.trim()) {
            const newTodo = {
               id: Date.now(),
               title: this.title,
               completed: false
            };

            this.$emit('add-todo', newTodo);
            this.title = "";
         }
      }
   }
}
</script>

<style scoped>
   form{
      display: flex;
      width: 100%;
      margin-bottom: 30px;
      
   }
   input{
      width: 100%;
      padding: 0 10px;
      border: 1px solid rgba(0, 0, 0, 0.507);
      box-shadow: 2px 10px 20px -10px rgba(0,0,0,0.75);
      border-radius: 10px;
      outline: none;
   }
   button{
      outline: none;
      height: 36px;
      width: 60px;
      background: rgba(0, 138, 30, 0.1);
      font-size: 18px;
      border: 1px solid lightgreen;
      cursor: pointer;
      margin-left: 5px;
      box-shadow: 2px 10px 20px -10px rgba(0,0,0,0.75);
   }

   button:hover{
      background: rgba(0, 138, 30, 0.178);
   }
   button:active{
      background: rgba(0, 138, 30, 0.274);
      transform: scale(0.95);
   }
</style>