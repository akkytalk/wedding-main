import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import vendorTypeReducer from "./reduxStore/reducer/RVendorType";
import createSagaMiddleware from "redux-saga";
import { watchAuth } from "./reduxStore/sagas";
import authReducer from "./reduxStore/reducer/RAuth";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  vendorType: vendorTypeReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
