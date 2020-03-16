import * as Types from './../constants/product';
import * as productApis from './../apis/product';
import { actionCreator } from './actionCreator.js';

export const actFetchProductRequest = (query, pageNumber) => {
  return dispatch => {
    dispatch(actionCreator(Types.FETCH_PRODUCT));
    return productApis
      .fetchList(query, pageNumber)
      .then(res => {
        dispatch(actionCreator(Types.FETCH_PRODUCT_SUCCESS, res));
      })
      .catch(err => {
        dispatch(actionCreator(Types.FETCH_PRODUCT_FAIL));
      });
  };
};

export const actSetQuery = query => {
  return actionCreator(Types.SET_QUERY, query);
};

export const actGetProductDetail = (id) => {
  return dispatch => {
    return productApis
      .getDetail(id)
      .then(res => {
        dispatch(actionCreator(Types.GET_PRODUCT_DETAIL_SUCCESS,res));
      })
      .catch(err => {
        console.log(err.message)
        dispatch(actionCreator(Types.GET_PRODUCT_DETAIL_FAIL))
      });
  }; 
}

export const actFetchRelatedProductRequest = (query) => {
  return dispatch => {
    return productApis
      .fetchList(query)
      .then(res => {
        dispatch(actionCreator(Types.FETCH_RELATE_PRODDUCT_SUCCESS,res));
      })
      .catch(err => {
        dispatch(actionCreator(Types.FETCH_RELATE_PRODDUCT_FAIL));
      });
  };
};