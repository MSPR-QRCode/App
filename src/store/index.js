//import redux
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers } from 'redux';
import QRCodeReducers from './reducers/qrcode'; 
import { persistStore, persistReducer } from 'redux-persist'

const rootPersitConfig = {
    key: 'root', 
    storage: AsyncStorage
}

const rootReducer = combineReducers({
	QRCodeReducers
});

const persistedReducer = persistReducer(rootPersitConfig, rootReducer); 


export const store = createStore(persistedReducer); 
export const persistor = persistStore(store); 
export default createStore(QRCodeReducers); 
