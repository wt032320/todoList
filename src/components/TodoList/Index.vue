<!--
 * @Author: your name
 * @Date: 2021-01-22 19:25:46
 * @LastEditTime: 2021-03-11 20:19:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\components\TodoList\Index.vue
-->

<template>
  <div>
    <todo-item 
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">

import { ITodo } from '@/typings'
import { useTodo, IUseTodo } from "@/hooks"
import { defineComponent, PropType } from 'vue'
import TodoItem from './Item.vue'

export default defineComponent({
  name: 'TodoList',
  props: {
    todoList: Array as PropType<ITodo[]>
  },
  components: {
    TodoItem
  },
  setup () {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo()
    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }
})

</script>

<style lang="">
  
</style>
