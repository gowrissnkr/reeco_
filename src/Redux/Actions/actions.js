import { ActionTypes } from "../ActionTypes/actiontypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const productDetails = (productDetails) => {
  return {
    type: ActionTypes.PRODUCT_DETAILS,
    payload: productDetails
  }
}

export const addToCart = (itemId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id : itemId
    }
  }
}

export const increaseItemQty = (itemID, qty) => {
  return {
    type: ActionTypes.INCREASE_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};
export const decreaseItemQTy = (itemID, qty) => {
  return {
    type: ActionTypes.DECREASE_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const removeItemFromCart = (itemID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const emptyCartItems = (empty) => {
  return {
    type : ActionTypes.EMPTY_CART,
    payload : empty
  }
}