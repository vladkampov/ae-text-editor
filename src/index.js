import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import UiStore from './store/uiStore';
import SynonymStore from './store/synonymStore';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = { uiStore: new UiStore(), synonymStore: new SynonymStore() };

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
