import * as Types from './../constants/cart';
export const actAddToCart = payload => {
  return {
    type: Types.ADD_TO_CART,
    payload
  };
};
