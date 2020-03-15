import * as Types from './../constants/cart';

const initialState = {
  total: 0,
  listCart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      const { payload } = action;
      return { ...state, total: state.total + payload.total, listCart: [...state.listCart, payload]};
    default:
      return state;
  }
};
export default reducer;
