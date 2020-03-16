import reducer from './../product';
import * as Types from './../../constants/product'

describe('product reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      detail: {},
      isError: false,
      relatedProducts: []
    });
  })
  it('should handle GET_PRODUCT_DETAIL_SUCCESS', () => {
    expect(
      reducer(({detail: {}, isError:false, relatedProducts:[]}), {
        type: Types.GET_PRODUCT_DETAIL_SUCCESS,
        payload: { result: {product:{id: 1, name: 'hp', total: 10 }}}
      })
    ).toEqual(
      {
        detail: { id: 1, name: 'hp', total: 10 },
        isError: false,
        relatedProducts: []
      }
    );
  })
  it('should handle GET_PRODUCT_DETAIL_FAIL', () => {
    expect(
      reducer(({detail: {}, isError:false, relatedProducts:[]}), {
        type: Types.GET_PRODUCT_DETAIL_FAIL,
        payload: null
      })
    ).toEqual(
      {
        detail: {},
        isError: true,
        relatedProducts: []
      }
    );
  })
  it('should handle FETCH_RELATE_PRODDUCT_SUCCESS', () => {
    expect(
      reducer(({detail: {}, isError:false, relatedProducts:[]}), {
        type: Types.FETCH_RELATE_PRODDUCT_SUCCESS,
        payload: { result:{ products:[{id: 1, name: 'hp', total: 10 }]}}
      })
    ).toEqual(
      {
        detail: {},
        isError: false,
        relatedProducts: [{id: 1, name: 'hp', total: 10}]
      }
    );
  })
});