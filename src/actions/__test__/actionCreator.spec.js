import { actionCreator } from "../actionCreator";
import * as Types from "./../../constants/product";
describe("actions", () => {
  it("should create an action fetch products", () => {
    const payload = "fetch products";
    const expectedAction = {
      type: Types.FETCH_PRODUCT,
      payload
    };
    expect(actionCreator(Types.FETCH_PRODUCT, payload)).toEqual(
      expectedAction
    );
  });
});
