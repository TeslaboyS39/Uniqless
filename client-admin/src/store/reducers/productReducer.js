import {
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
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
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false,
      };
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_PRODUCT_SUCCESS:
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        products: updatedProducts,
        isLoading: false,
      };
    case EDIT_PRODUCT_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      const updatedProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: updatedProduct,
        isLoading: false,
      };
    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
