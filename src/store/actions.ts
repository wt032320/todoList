/*
 * @Author: your name
 * @Date: 2021-01-22 19:13:56
 * @LastEditTime: 2021-03-11 20:27:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\store\actions.ts
 */

import { ITodo, IState } from '@/typings';
import { Commit } from 'vuex';
import { REMOVE_TODO, SET_TODO, SET_TODO_LIST, SET_STATUS, SET_DOING } from './actionTypes';

interface ICtx {
  commit: Commit;
  state: IState
}
export default {
  [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
    commit(SET_TODO, todo)
  },
  [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
    commit(SET_TODO_LIST, todoList)
  },
  [REMOVE_TODO]({ commit }: ICtx, id: number): void {
    commit(REMOVE_TODO, id) 
  },
  [SET_STATUS]({ commit }: ICtx, id: number): void {
    commit(SET_STATUS, id)
  },
  [SET_DOING]({ commit }: ICtx, id: number): void {
    commit(SET_DOING, id)
  }
} 
