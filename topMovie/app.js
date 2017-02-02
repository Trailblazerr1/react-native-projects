import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
 View,
 Text
} from 'react-native';
import reducers from './reducers';
import MovieList from './components/movieList';


class App extends Component {
    render() {
        return (
                <Provider store={createStore(reducers)}>
                    <View>
                        <MovieList />
                    </View>
                </Provider>
            );
    }
}

export default App;
