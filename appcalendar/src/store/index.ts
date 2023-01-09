import { eventReducer } from './../reducers/event/index';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState> // Получаем тип состояния
export type AppDispatch = typeof store.dispatch // Получаем тип диспатча