<!--할 일 입력 및 추가-->
<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" area-hidden="true"></i>
    </span>
  </div>
</template>
<style scoped>
  input:focus{
    outline:none;
  }
  .inputBox{
    background:white;
    height:50px;
    line-height:50px;
    border-radius:5pc;
  }
  .inputBox input{
    border-style:none;
    font-size:0.9rem;
  }
  .addContainer{
    float:right;
    background:linear-gradient(to right, #6478FB, #8763FB);
    display:block;
    width:3rem;
    border-radius:0 5px 5px 0;
  }
  .addBtn{
    color:white;
    vertical-align:middle;
  }
</style>
<script>
export default{
  data(){
    return{
      newTodoItem : ''
    }
  },
  methods : {
    addTodo(){
      if(this.newTodoItem !== ""){
        var value = this.newTodoItem && this.newTodoItem.trim(); //입력된 텍스트의 앞뒤 공백 문자열 제거
        localStorage.setItem(value, value); //키-밸류 모두 입력받은 텍스트로 지정
        this.clearInput();//인풋 박스의 입력 값을 초기}
     }
   },
    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>
