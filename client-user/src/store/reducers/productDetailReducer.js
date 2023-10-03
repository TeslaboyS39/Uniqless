import {
  PRODUCT_DETAIL_FETCH_START,
  PRODUCT_DETAIL_FETCH_SUCCESS,
  PRODUCT_DETAIL_FETCH_FAILED,
} from "../actions/actionType";

const initialState = {
  productDetail: null,
  isLoading: true,
  error: null,
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
        isLoading: false,
      };
    case PRODUCT_DETAIL_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
