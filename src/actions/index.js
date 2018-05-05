import { ADD_CART, DELET_CART, ADD, REDUCE } from "../constants/action-types"

export const addToCart = obj => ({ type: ADD_CART, payload: obj });
export const deleteCart = obj => ({ type: DELET_CART, payload: obj })
export const add = obj => ({ type: ADD, payload: obj })
export const reduce = obj => ({ type: REDUCE, payload: obj })