<template>
   <div>
      <ul>
         <TodoItem 
         v-for="(todo, i) in todos" :key='todo.id'
         v-bind:index="i"
         v-bind:todo="todo"
         v-on:remove-todo="removeTodo"
         @save-change='Save'
         />
      </ul>
   </div>
</template>

<script>
import TodoItem from '@/components/TodoItem' 

export default {
   props: ['todos'],
   components:{
      TodoItem
   },
   methods:{
      removeTodo(id){
         this.$emit('remove-todo', id) 
      },
      Save(){
         this.$emit('save-change')  
      }
      
   },
   
}
</script>

<style scoped>
  ul{
      list-style: none;
      margin: 0;
      padding: 0;
   }
</style>
  
