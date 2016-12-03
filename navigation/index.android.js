
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import Landing from './two'


var PageOne = React.createClass({
  handlePress() {
    this.props.navigator.push({
      id: 2,
    });
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: '#2E86C1'}]}>
        <Text style={styles.welcome}>Hola!</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={{backgroundColor:"black"}}>
            <Text style={styles.welcome}>Go to page two</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});


var PageTwo = React.createClass({
  handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
        <Text style={styles.welcome}>Madrid</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={{backgroundColor:"black"}}>
            <Text style={styles.welcome}>Go back</Text>
          </View>
        </TouchableOpacity>
       </View>
    )
  },
});


class social extends Component {
  renderScene(route, navigator) {
    if (route.id === 1) {
      return <PageOne navigator={navigator} />
    } else if (route.id === 2) {
      return <PageTwo navigator={navigator} />
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: 1, }}
        renderScene={this.renderScene}
        configureScene={this.configureScene} 
        />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  }
});

AppRegistry.registerComponent('social', () => social);

module.exports = social;