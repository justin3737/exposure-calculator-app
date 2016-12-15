import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';

import Root from 'components/Root';
import 'assets/scss/style';

const finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(rootReducer);

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
