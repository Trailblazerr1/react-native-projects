import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MovieList from './components/movieList';

const RouterComponent = () => {
    return (
            <Router sceneStyle={{ paddingTop: 52 }}>
                <Scene key="list" component={MovieList} title="Top movies" />
            </Router>
        );
};

export default RouterComponent;
