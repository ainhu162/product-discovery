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
      return {...state, query: action.payload}

    case Types.FETCH_PRODUCT_SUCCESS:
      const { result,extra } = action.payload;
      const newState = {
        loading: false,
        page: extra.page,
        totalItems: extra.totalItems,
        productList: extra.page === 1 ? [...result.products] : [...state.productList,...result.products]
      }
      return {
        ...state,
        ...newState
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
