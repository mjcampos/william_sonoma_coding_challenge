import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';

// Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

var store = createStore(reducer);

store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);