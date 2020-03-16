import {actAddToCart} from './../cart';
import * as Types from "./../../constants/cart";
describe("actions", () => {
  it("should create an action to add to cart", () => {
    const payload = {product: 'some data'};
    const expectedAction = {
      type: Types.ADD_TO_CART,
      payload
    };
    expect(actAddToCart(payload)).toEqual(expectedAction);
  });
});
