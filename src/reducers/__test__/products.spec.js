import reducer from './../products';
import * as Types from './../../constants/product'

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        productList: [],
        loading: false,
        page: 1,
        totalItems: 0,
        query:''
    });
  })
  it('should handle FETCH_PRODUCT', () => {
      const state = {
        productList: [],
        loading: false,
        page: 1,
        totalItems: 0,
        query: ""
      };
    expect(
      reducer(({...state}), {
        type: Types.FETCH_PRODUCT,
        payload: null
      })
    ).toEqual({...state, loading: true});
  })
  it('should handle FETCH_PRODUCT_SUCCESS', () => {
      const state = {
        productList: [],
        loading: false,
        page: 1,
        totalItems: 0,
        query: ""
      };
    expect(
      reducer(({...state}), {
        type: Types.FETCH_PRODUCT_SUCCESS,
        payload: { extra: {page: 1,totalItems: 20},result:{ products:[{id: 1, name: 'hp', total: 10 }]}}
      })
    ).toEqual({...state,totalItems:20, productList:[{id: 1, name: 'hp', total: 10 }]});
  })
  it('should handle FETCH_PRODUCT_FAIL', () => {
      const state = {
        productList: [],
        loading: false,
        page: 1,
        totalItems: 0,
        query: ""
      };
    expect(
      reducer(({...state}), {
        type: Types.FETCH_PRODUCT_FAIL,
        payload: null
      })
    ).toEqual({...state, loading: false});
  })
});