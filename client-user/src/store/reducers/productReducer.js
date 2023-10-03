import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILED,
} from "../actions/actionType";

const initialState = {
  products: [],
  isLoading: true,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case PRODUCTS_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
