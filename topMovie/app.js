import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './router';
import reducers from './reducers';

class App extends Component {
    render() {
        return (
                <Provider store={createStore(reducers)}>
                    <Router />
                </Provider>
            );
    }
}

export default App;
