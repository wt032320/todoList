/*
 * @Author: your name
 * @Date: 2021-01-22 19:12:44
 * @LastEditTime: 2021-02-03 12:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3+Typescript\vue3-todo\src\store\state.ts
 */
import { IState } from '@/typings'

export default <IState>{
  list: []
}

/*
  list: []
  listItem: {
    id: new Date().getTime -> number
    content: string
    status: FINIDHED DOING WILLDO -> 枚举
  }
*/