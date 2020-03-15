import * as Types from './../constants/product';

const initialState = {
  productList: [],
  loading: false,
  page: 1,
  totalItems: 0,
  query:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      return { ...state, loading: true};
    case Types.SET_QUERY:
      return {...state, query: action.query}
    case Types.FETCH_PRODUCT_SUCCESS:
      const { result,extra } = action.payload;
      const newState = {
        loading: false,
        page: extra.page,
        totalItems: extra.totalItems,
      }
      if(extra.page === 1){
        return {
          ...state,
          ...newState,
          productList: [...result.products],
        }
      }else {
        return {
          ...state,
          ...newState,
          productList: [...state.productList,...result.products],
        };
      }
    case Types.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
