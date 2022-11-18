import { createStore, applyMiddleware, combineReducers,  Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import fakeDataReducer from "./reducers/fakeDataReducer";

const store = createStore(
    combineReducers(
        {
            fakeDataReducer,
        }),
    composeWithDevTools(applyMiddleware(thunk)),
)


export default store;