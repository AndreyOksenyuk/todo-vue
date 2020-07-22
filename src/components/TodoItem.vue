<template>
   <li>
      <div class="item">
      <span v-bind:class="{done: todo.completed}">
         <input 
            type="checkbox"
            :checked="todo.completed" 
            v-on:change="todo.completed = !todo.completed"
            @click="Save"
         >
         <strong>{{index + 1}}</strong>
         {{todo.title}}
      </span>
      </div>
      <button @click="$emit('remove-todo', todo.id)">X</button>
   </li>
</template>

<script>
export default {
   data(){
      return{

      }
   },
   props: {
      todo:{
         type: Object,
         required: true
      },
      index: Number,
   },
   methods:{
      Save(){
         this.$emit('save-change') 
      }
   }
 
}
</script>
<style scoped>
   li{
      display: flex;
      justify-content: space-between;
      border: 1px #4e4e4e solid;
      height: auto;
      margin-bottom: 10px;
      background-color: rgba(0, 255, 255, 0.1);
   }

   .item{
      display: flex;
      justify-content: space-between;
      overflow: auto;
   }
  button{
      outline: none;
      width: 36px;
      background: rgba(221, 20, 6, 0.801);
      font-size: 18px;
      border: 1px solid rgba(0, 0, 0, 0.712);
      cursor: pointer;
      margin-left: 5px;
   }

   button:hover{
      background: rgb(194, 21, 5);
   }
   button:active{
      background: rgb(94, 0, 0);
      transform: scale(0.95);
   }
   input{
      padding: 0 10px;
   }
   span{
      padding: 8px 0 8px 20px;
   }

   .done{
      text-decoration: line-through;
   }
</style>