import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { compose, combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import vendorTypeReducer from "./reduxStore/reducer/RVendorType"

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

    const rootReducer = combineReducers({ 
      vendorType: vendorTypeReducer
    });

    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    ); 

ReactDOM.render(
  <Provider store={store}>
    <App />
     </Provider>
  ,
  document.getElementById('root')
); 