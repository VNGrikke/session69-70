import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
    reducerCart: cartReducer,
    reducerProduct: productsReducer
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
