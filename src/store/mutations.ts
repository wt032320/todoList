/*
 * @Author: your name
 * @Date: 2021-01-22 19:14:06
 * @LastEditTime: 2021-03-12 14:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\store\mutations.ts
 */

import { IState, ITodo, TODO_STATUS } from '@/typings';
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from './actionTypes';
import state from './state';

export default {
  [SET_TODO](state: IState, todo: ITodo): void {
    // state.list.unshift(todo)
    state.list = [todo, ...state.list]
  },
  [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
    state.list = todoList
  },
  [REMOVE_TODO](state: IState, id: number): void {
    state.list = state.list.filter((item: ITodo) => item.id !== id)
  },
  [SET_STATUS](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => { 
      if (item.id === id) {
        switch (item.status) {
          case TODO_STATUS.FINISHED:
            item.status = TODO_STATUS.WILLDO
            break
          case TODO_STATUS.WILLDO:
            item.status = TODO_STATUS.FINISHED
            break
          case TODO_STATUS.DOING:
            item.status = TODO_STATUS.FINISHED
            break
          default:
            break
        }
      }
      return item
    })
  },
  [SET_DOING](state: IState, id: number): void {
    state.list = state.list.map((item: ITodo) => {
      if (item.id !== id) {
        if (item.status === TODO_STATUS.DOING) {
          item.status = TODO_STATUS.WILLDO
        }
      } else {
        if (item.status === TODO_STATUS.WILLDO) {
          item.status = TODO_STATUS.DOING
        } else {
          item.status = TODO_STATUS.WILLDO
        }
      }
      return item
    })
  }
}
