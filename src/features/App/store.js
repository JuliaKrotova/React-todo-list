import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log("Middleware", store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware))
);

export default store;
