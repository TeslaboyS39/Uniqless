import {
  CATEGORIES_FETCH_START,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_FETCH_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from "../actions/actionType";

const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case CATEGORIES_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        isLoading: false,
      };
    case ADD_CATEGORY_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      const updatedCategory = state.categories.filter(
        (category) => category.id !== action.payload
      );
      return {
        ...state,
        categories: updatedCategory,
        isLoading: false,
      };
    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
