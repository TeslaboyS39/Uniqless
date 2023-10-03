import {
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAILED,
} from "../actions/actionType";

const initialState = {
  users: [],
  isLoading: true,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ADMIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        isLoading: false,
      };
    case ADD_ADMIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
