import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reducers from './reducer';


const persistedReducer = persistReducer({
    key:'root',
    storage:AsyncStorage,
    whitelist:['InvestReducer']
}, Reducers);

const store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor};