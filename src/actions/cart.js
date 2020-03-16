import * as Types from './../constants/cart';
import {actionCreator} from './actionCreator';
export const actAddToCart = payload => {
  return actionCreator(Types.ADD_TO_CART, payload);
};
