<template>
<div>
  <!-- <NavMenu /> -->
  <div id="todoApp">
    <h2>Todo list</h2>
    <AddTodo
      @add-todo="addTodo"
     />
   <button @click='TodoSave'>&#128190;</button>
  <TodoList
   v-if="todos.length"
    v-bind:todos="todos"
    @remove-todo="removeTodo"
    @save-change="SaveChange"
  />
  <p v-else>No Todos!!!</p>  
  
  </div>
</div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import save from '@/components/TodoItem'
// import NavMenu from '../components/Navmenu'

export default{
  data(){
    return{
      todos:[
        // {id: 1, title: 'Купить хлеб', completed: false},
        // {id: 2, title: 'Купить молоко', completed: false},
        // {id: 3, title: 'Купить рыбу', completed: false}
      ],
    }
  },
  methods:{
   removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id);
      localStorage.todo = JSON.stringify(this.todos);
    },
   addTodo(todo){
      this.todos.push(todo);    
      localStorage.todo = JSON.stringify(this.todos); 
    },
    TodoSave(){
      localStorage.todo = JSON.stringify(this.todos);
    },
    TodoGet(){
      JSON.parse(localStorage.todo).forEach(e => {
       this.todos.push(e)
      });
    },
    SaveChange(){
        localStorage.todo = JSON.stringify(this.todos);  
    }
  },
 mounted() {
     this.TodoGet();
  },

  components:{
    TodoList, AddTodo, save, 
  }
}
</script>

<style scoped>
#todoApp{
   max-width: 800px;
   margin: 0 auto;
}
h1{
  font-size: 40px;
}
h2{
  background: rgba(255, 68, 0, 0.356);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 600;
}
#LinkHome a{
   margin-bottom: 20px;
   text-decoration: none;
   font-size: 20px;
   color: navy;
}
button{
  margin: 0 10px 20px;
  outline: none;
  background: rgba(0, 255, 255, 0.596);
  font-size: 19px;
  padding: 5px 15px;
  border: 1px solid lightgreen;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 5px;
}
button:hover{
  background: rgba(18, 88, 153, 0.589);
}
button:active{
  background: rgba(73, 53, 185, 0.87);
  transform: scale(0.95);
}
</style>