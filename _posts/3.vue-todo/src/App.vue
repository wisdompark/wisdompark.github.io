<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>
<style>
  body{
    text-align : center;
    background-color : #F6F6F8;
  }
  input{
    border-style : groove;
    width : 200px;
  }
  button{
    border-style : groove;
  }
  .shadow{
    box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default{
  data(){
    return{
      todoItems : [] //데이터 속성 todoItems 선언
    }
  },
  created(){
    if(localStorage.length > 0){
      for(var i=0; i<localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods:{
    addTodo(todoItem){
      //로컬 스토리지에 데이터를 추가하는 로직
      localStorage.setItem(todoItem, todoItem); //키-밸류 모두 입력받은 텍스트로 지정
      this.todoItems.push(todoItem);
    },
    clearAll(){
      localStorage.clear();
      this.todoItems=[];
    },
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  //컴포넌트 등록
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
</style>
