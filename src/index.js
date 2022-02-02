import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootStor from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './styles/base.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStor.store}>
      {/* <PersistGate loading={null} persistor={rootStor.persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
