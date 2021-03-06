import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'; 
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/Loading';
import { LogBox } from 'react-native';

const { persistor, store } = ConfigureStore();

export default function App() {
  LogBox.ignoreAllLogs(true)
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
          persistor={persistor}> 
        <Main />
      </PersistGate> 
    </Provider>
  );
}
