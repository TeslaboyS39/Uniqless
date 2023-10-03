import { COUNTER_INCREMENTED } from "../actions/actionType";

const initialState = {
  counter: 0,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENTED:
      const newCounter = state.counter + action.payload;
      return {
        ...state,
        counter: newCounter,
      };
    default:
      return state;
  }
}
