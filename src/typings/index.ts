/*
 * @Author: your name
 * @Date: 2021-02-03 11:28:38
 * @LastEditTime: 2021-03-12 14:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\typings\index.ts
 */

interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS
}

interface IState {
  list: ITodo[]
}

// 定义status的枚举类型
enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finshed'
}

export {
  ITodo,
  IState,
  TODO_STATUS
}
