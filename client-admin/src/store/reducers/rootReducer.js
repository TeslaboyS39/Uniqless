import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import adminReducer from "./adminReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  users: adminReducer,
  counter: counterReducer,
});

export default rootReducer;

// import { COUNTER_INCREMENTED, PRODUCTS_FETCH_START, PRODUCTS_FETCH_SUCCESS } from "../actions/actionType";

// const initialState = {
//     products: [],
//     users: [],
//     counter: 0,
//     isLoading: true
// }

// export default function rootReducer(state = initialState, action) {
//     switch (action.type) {
//     case COUNTER_INCREMENTED:
//         const newCounter = state.counter + action.payload
//         return {
//             ...state,
//             counter: newCounter
//         };
//         case PRODUCTS_FETCH_START:
//             return {
//               ...state,
//               isLoading: true,
//             };
//         case PRODUCTS_FETCH_SUCCESS:
//           return {
//             ...state,
//             products: action.payload,
//             isLoading: false,
//           };
//     default:
//         return state;
//     }
// }
