import * as Types from './../constants/product';
import * as productApis from './../apis/product';

export const actFetchProductRequest = (query, pageNumber) => {
  return dispatch => {
    dispatch(actFetchProduct(query));
    return productApis
      .fetchList(query, pageNumber)
      .then(res => {
        dispatch(actFetchProductSuccess(res));
      })
      .catch(err => {
        dispatch(actFetchProductFail());
      });
  };
};
export const actFetchProduct = query => {
  return {
    type: Types.FETCH_PRODUCT,
    query
  };
};
export const actFetchProductSuccess = payload => {
  return {
    type: Types.FETCH_PRODUCT_SUCCESS,
    payload
  };
};
export const actFetchProductFail = () => {
  return {
    type: Types.FETCH_PRODUCT_FAIL
  };
};
export const actSetQuery = query => {
  return {
    type: Types.SET_QUERY,
    query
  };
};
