import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCWHnQ7DBpeq6S9IOu-NY3a97VHKm5wmcE',
      authDomain: 'manager-1ce2b.firebaseapp.com',
      databaseURL: 'https://manager-1ce2b.firebaseio.com',
      storageBucket: 'manager-1ce2b.appspot.com',
      messagingSenderId: '928111085794'
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
