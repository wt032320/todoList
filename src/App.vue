<!--
 * @Author: your name
 * @Date: 2021-01-22 16:52:35
 * @LastEditTime: 2021-03-11 17:32:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\App.vue
-->
<template>
  <div class="wrapper">
    <todo-input />
    <todo-list 
      :todoList="todoList"
    /> 
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { Store, useStore } from "vuex";
import TodoInput from './components/TodoInput/Index.vue'
import TodoList from './components/TodoList/Index.vue'  
import { useTodo, IUseTodo } from './hooks/index'

export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo()
    const store: Store<any> = useStore()
    // onMounted() : 组件挂载完成后执行的函数。
    onMounted(() => {
      setTodoList()
    })
    
    return {
      todoList: computed(() => store.state.list)
    }
  }
})

</script>

<style>

</style>
