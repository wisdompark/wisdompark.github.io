//전역 컴포넌트 등록
Vue.component('todo-footer', {
  template : '<p>This is another global child component</p>'
});
//지역 컴포넌트 내용
var cmp = {
  template : '<div>This is another local child component</div>'
};
//첫번째 인스턴스
new Vue({
  el : '#app',
  components : {
    'todo-list' : cmp
  }
});
