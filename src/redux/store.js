import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authenticationReducer } from "./reducers/authentication_reducer";
import { navigationReducer } from "./reducers/navigation_reducer";
import { clientReducer } from "./reducers/client_reducer";
import { productReducer } from "./reducers/product_reducer";
import { initialState } from "./initialState";

console.log(authenticationReducer);
export const rootReducer = combineReducers({
  auth: authenticationReducer,
  navigation: navigationReducer,
  client: clientReducer,
  product: productReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
