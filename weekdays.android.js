//import codes
//var React = require('react-native');
//var AppRegistry = React.AppRegistry;
//var Text = React.Text;
//var View = React.View;
//var StyleSheet = React.StyleSheet;
import React, { Component } from 'react';
import DayItem, { Component } from './src/day-item';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
var DAYS = ['Sunday','Monday','Tuesday','Wednesday']



//create component
var Weekd = React.createClass({ //pass an object
  render: function() {
    return <View style={styles.container}> //div
      <Text>
        Days of the week:
      </Text>
      {this.days()}
     // <DayItem day={DAYS[0]} data pushed to child
              //composition
    </View>
  },
  days: function() {
    DAYS.map(function(day)) {
        //7 times
        return <DayItem day={day}/>
    }
  }
});


//style
var styles = StyleSheet.create({
  container: {
    flex: 1,   //fill whole 
    justifyContent: 'center', //y-axis
    //alignItems: 'center' //x-axis
  }
});


// show comp on the screen
AppRegistry.registerComponent('Weekd',function() {
  return Weekd
});