/*
 * @Author: your name
 * @Date: 2021-02-03 11:58:23
 * @LastEditTime: 2021-03-12 14:00:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\hooks\index.ts
 */

import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from '@/store/actionTypes'
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from 'vuex'
import { watch } from 'vue'

interface IUseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

interface IUseLocalStorage {
  getLocalList: () => ITodo[];
  setLocalList: (todoList: ITodo[]) => void 
}

function useLocalStorage (): IUseLocalStorage {
  function getLocalList (): ITodo[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  function setLocalList (todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  return {
    getLocalList,
    setLocalList
  }
}

function useTodo (): IUseTodo {

  const store: Store<any> = useStore()
  const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage()
  const todoList: ITodo[] = getLocalList()

  watch(() => {
    return store.state.list
  }, (todoList) => {
    setLocalList(todoList)
  })

  function setTodo (value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    }

    store.dispatch(SET_TODO, todo)
  }

  function setTodoList () {
    store.dispatch(SET_TODO_LIST, todoList)
  }

  function removeTodo (id: number) {
    store.dispatch(REMOVE_TODO, id)
  }

  function setStatus (id: number) {
    store.dispatch(SET_STATUS, id)
  }

  function setDoing (id: number) {
    store.dispatch(SET_DOING, id)
  }
  
  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  }
}

export {
  useTodo,
  IUseTodo
}
