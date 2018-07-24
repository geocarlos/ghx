import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import {withRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const GHXApp = withRouter(App);
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router><GHXApp/></Router>
</Provider>,
document.getElementById('root'));

registerServiceWorker();
