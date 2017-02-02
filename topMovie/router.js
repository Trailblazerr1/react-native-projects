import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MovieList from './components/movieList';
import MovieDetail from './components/movieDetail';

const RouterComponent = () => {
    return (
            <Router sceneStyle={{ paddingTop: 52 }}>
                <Scene key="list" component={MovieList} title="Top movies" />
                <Scene key="detail" component={MovieDetail} title="Detail" />            
            </Router>
        );
};

export default RouterComponent;
