import {ADD_TO_BASKET, DEL_TO_GOOD, INCREMENT} from "../Reducers/types";

export const cardAC = (goods, id) => {
  return {
    type: ADD_TO_BASKET,
    payload: goods,
    id
  }
}

export const cardDelAC = (index) => {
  return {
    type: DEL_TO_GOOD,
    i: index
  }
}

export const incAC = (num, i) => {
  return {
    type: INCREMENT,
    num,
    i
  }
}
