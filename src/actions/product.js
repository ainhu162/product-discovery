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

export const actGetProductDetail = (id) => {
  return dispatch => {
    return productApis
      .getDetail(id)
      .then(res => {
        dispatch(actGetProductDetailSuccess(res));
      })
      .catch(err => {
        console.log(err.message)
        dispatch(actGetProductDetailFail())
      });
  }; 
}

export const actGetProductDetailSuccess = payload => {
  return {
    type: Types.GET_PRODUCT_DETAIL_SUCCESS,
    payload: payload.result
  };
};
export const actGetProductDetailFail = () => {
  return {
    type: Types.GET_PRODUCT_DETAIL_FAIL
  };
};

export const actFetchRelatedProductRequest = (query) => {
  return dispatch => {
    return productApis
      .fetchList(query)
      .then(res => {
        dispatch(actFetchRelatedProductSuccess(res));
      })
      .catch(err => {
        dispatch(actFetchRelatedProductFail());
      });
  };
};

export const actFetchRelatedProductSuccess = payload => {
  return {
    type: Types.FETCH_RELATE_PRODDUCT_SUCCESS,
    payload
  };
};
export const actFetchRelatedProductFail = () => {
  return {
    type: Types.FETCH_RELATE_PRODDUCT_FAIL
  };
};