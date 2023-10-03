import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "./middlewares/logger"; // sebelum deploy logger dihapus
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
