import { ActionTypes } from "../ActionTypes/actiontypes";


const intialState = {
  products: [],
  product: [],
  cart: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.PRODUCT_DETAILS:
      return {
        ...state,
        productdetails: payload
      }

    case ActionTypes.ADD_TO_CART:
      const item = state.products.find((product) => product.id === payload.id)
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart ?
          state.cart.map((cartItems) => cartItems.id === payload.id ? { ...cartItems, qty: cartItems.qty + 1 } : cartItems)
          : [...state.cart, { ...item, qty: 1 }]
      }

    case ActionTypes.INCREASE_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == payload.id ? { ...item, qty: item.qty + 1 } :
            item
        ),
      };
    case ActionTypes.DECREASE_ITEM_QTY:
      const items = state.cart.map((item, i) => item.qty < 0) ? true : false
      console.log(items)
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id == payload.id ? { ...item, qty: item.qty - 1 } :
            item
        ),
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != payload.id)
      };
    case ActionTypes.EMPTY_CART:
      return {
        ...state,
        cart: payload
      };
    default:
      return state;
  }
};




