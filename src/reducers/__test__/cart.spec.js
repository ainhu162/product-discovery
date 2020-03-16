import reducer from './../cart';
import * as Types from './../../constants/cart'

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        total: 0,
        listCart: []
      }
    );
  })
  it('should handle ADD_TO_CART', () => {
    expect(
      reducer(({total: 0, listCart:[]}), {
        type: Types.ADD_TO_CART,
        payload: { id: 1, name: 'hp', total: 10 }
      })
    ).toEqual(
      {
        total: 10,
        listCart: [{ id: 1, name: 'hp', total: 10 }]
      }
    );
  })
});