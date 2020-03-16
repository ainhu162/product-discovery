import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as productApis from './../../apis/product';
import * as Action from './../product';
import * as Types from './../../constants/product';
import mockAxios from '../../apis/__mocks__/axios';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Product actions', () => {

  it('fetch products success', () => {
      const data = {
        products: ["do something"]
      };
    var actFetchProductRequestFn = jest.fn(Action.actFetchProductRequest)
    const expectedActions = [
      { type: Types.FETCH_PRODUCT, payload: null },
      { type: Types.FETCH_PRODUCT_SUCCESS, payload: data }
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    const store = mockStore({});

    return store.dispatch(actFetchProductRequestFn("may tinh", 1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
  it('fetch products fail', () => {
      const error = {
          message:'Network'
      }
      var actFetchProductRequestFn = jest.fn(Action.actFetchProductRequest);
      const expectedActions = [
      { type: Types.FETCH_PRODUCT, payload: null },
      { type: Types.FETCH_PRODUCT_FAIL, payload: null }
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.reject(error));
    const store = mockStore({});

    return store.dispatch(actFetchProductRequestFn("may tinh", 1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  })

  it('change query', ()=>{
      const payload = { query: "some data" };

      const expectedAction = {
        type: Types.SET_QUERY,
        payload
      };

      expect(Action.actSetQuery(payload)).toEqual(expectedAction);
  })

  it("fetch product detail success", () => {
    const data = {
      product: {id: 1, name: "some data"}
    };
    var actGetProductDetailRequestFn = jest.fn(Action.actGetProductDetail);
    const expectedActions = [
      { type: Types.GET_PRODUCT_DETAIL_SUCCESS, payload: data }
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    const store = mockStore({});

    return store.dispatch(actGetProductDetailRequestFn(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetch product detail fail", () => {
    const error = {
      message: "Network"
    };
    var actGetProductDetailRequestFn = jest.fn(Action.actGetProductDetail);
    const expectedActions = [
      { type: Types.GET_PRODUCT_DETAIL_FAIL, payload: null }
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.reject(error));
    const store = mockStore({});

    return store.dispatch(actGetProductDetailRequestFn(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetch related products success", () => {
    const data = {
      products: [{ id: 1, name: "some data" }]
    };
    var actFetchRequestFn = jest.fn(Action.actFetchRelatedProductRequest);
    const expectedActions = [
      { type: Types.FETCH_RELATE_PRODDUCT_SUCCESS, payload: data }
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    const store = mockStore({});

    return store.dispatch(actFetchRequestFn("linh kien")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetch related products detail fail", () => {
    const error = {
      message: "Network"
    };
    var actFetchRequestFn = jest.fn(Action.actFetchRelatedProductRequest);
    const expectedActions = [
      { type: Types.FETCH_RELATE_PRODDUCT_FAIL, payload: null }
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.reject(error));
    const store = mockStore({});

    return store.dispatch(actFetchRequestFn('linh kien')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})