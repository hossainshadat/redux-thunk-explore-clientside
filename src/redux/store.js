import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middleWares.js/cartCounter";
import logger from "redux-logger";
import thunk from "redux-thunk";

// composeWithDevTools(logger)
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, logger, thunk))
);

export default store;
