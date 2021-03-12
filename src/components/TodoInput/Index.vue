<!--
 * @Author: your name
 * @Date: 2021-01-22 19:24:44
 * @LastEditTime: 2021-02-03 13:05:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\components\TodoInput\Index.vue
-->

<template>
  <div>
    <input 
      type="text"
      v-model="todoValue"
      @keyup="setTodoValue"
    />
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import { useTodo, IUseTodo } from '@/hooks'

export default defineComponent({
  name: 'TodoInput',
  setup () {
    const todoValue = ref<string>('')
    const { setTodo }: IUseTodo = useTodo()
    const setTodoValue = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && todoValue.value.trim().length) {
        // 设置数据
        setTodo(todoValue.value)
        todoValue.value = ''
      }
    }

    return {
      todoValue,
      setTodoValue
    }
  }
})

</script>
<style lang="">
  
</style>
