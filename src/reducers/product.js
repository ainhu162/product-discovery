import * as Types from './../constants/product';

const initialState = {
  detail: {},
  isError: false,
  relatedProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_DETAIL_SUCCESS:
      const { result:{product} } = action.payload;
      return { ...state, detail: { ...product } };

    case Types.GET_PRODUCT_DETAIL_FAIL:
      return { ...state, isError: true };

    case Types.FETCH_RELATE_PRODDUCT_SUCCESS:
      const { result } = action.payload;
      return {
        ...state,
        relatedProducts: [...result.products]
      };

    default:
      return state;
  }
};
export default reducer;
