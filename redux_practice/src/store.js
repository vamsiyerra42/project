import { combineReducers, createStore } from 'redux';
import reducer from './reducer';
import foodReducer from './FoodReducer';
export const store = createStore(foodReducer);