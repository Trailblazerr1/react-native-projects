//index.android.js

//import a lib
import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumList'

//create a component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
    );
};

//render
AppRegistry.registerComponent('albums', () => App);
//returning(projname,fun that retuns first component)

