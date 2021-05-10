import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { gospel } from './gospel';
import { bible } from './bible';
import { comments } from './comments';
import { parables } from './parables';
import { podcasts } from './podcasts';

const config = {
    key: 'root',
    storage,
    debug: true
}
export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            gospel,
            bible,
            comments,
            parables,
            podcasts,
            
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return { persistor, store };
}