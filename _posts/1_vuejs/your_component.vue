<!DOCTYPE html>
<html>
  <template>
    <div>
      <span>
        <button>{{message}}</button>
      </span>
    </div>
  </template>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script>
  export default{
    data : {
      message : 'click this button'
    }
  }
  </script>
  <style>
  span {
    font-size : 1.2em;
  }
  </style>
</html>
