import {ADD_TO_BASKET, DEL_TO_GOOD, INCREMENT} from "./types";

export const initialState = {
  cardGoods: [
    {
      id: 11,
      name: "Samsung s99",
      image: "https://cdn.svyaznoy.ru/upload/iblock/642/4157920_10.jpg/resize/483x483/hq/",
      price: 20000,
      count: 1
    },
    {
      id: 23,
      name: "Iphone 234",
      image: "https://cdn.svyaznoy.ru/upload/iblock/642/4157920_10.jpg/resize/483x483/hq/",
      price: 24000,
      count: 1
    },
    {
      id: 43,
      name: "Xiaomi",
      image: "https://cdn.svyaznoy.ru/upload/iblock/642/4157920_10.jpg/resize/483x483/hq/",
      price: 67000,
      count: 1
    }
  ],
  basket: []
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_BASKET:
        if (!state.basket.includes(action.payload)) {
          return {
            ...state,
            basket: [...state.basket, action.payload]
          }
        }
        else {
          return state
        }

      case DEL_TO_GOOD:
        return {
          ...state,
          basket: [...state.basket.filter((good, i) => {
            return i !== action.i
          })]
        }
      case INCREMENT:

        const baskets = [...state.basket]
        const basketsElem = baskets[action.i]

        if ( basketsElem.count >= 1) {
          basketsElem.count += action.num
        }

        if( basketsElem.count < 1){
          basketsElem.count = 1
        }

        return {
          ...state,
          basket: baskets
        }

      default:
        return state
    }
}