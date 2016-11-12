import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableHighLight,Text, View } from 'react-native';


var Stopwatch = React.createClass({
    getInitialState: function() {
        return {
            timeElapsed:null
        }
    },
    render: function() {
        return <View style={styles.container()}>
            <View style={[style.header(),this.border('yellow')]}>
            //yellow
                <View style={[styles.timerWrapper, this.border('red')]}>
                //red
                <Text>
                {this.state.timeElapsed()}
                </Text>
                </View>
                <View style={[styles.buttonWrapper, this.border('green')]}>     
                //green      
                {this.startStopButton()}
                {this.lapButton()}
                </View>
            </View>

                <View style={[styles.footer(),this.border('yellow')]}>
                    <Text>
                    Lost
                    <Text>
                </View>
        </View>

    },
    startStopButton: function() {
        return  <TouchableHighLight 
            underlayColor="gray"
            onPress={this.handleStartPress}
            >
                    <Text>
                    Start
                    </Text>
                </TouchableHighLight>
    },
    lapButton: function() {
        return <View>
                    <Text>
                        Lap
                    </Text>
                </View>
    },
    border: function(color) {
        return {
            borderColor: color,
            borderWidth: 4
        }
    },
    handleStartPress: function() {
        var startTime = new Date();

        setInterval(() => {
        this.setState({
            timeElapsed: new Date() - startTime
            
        });
    },30)

    }
});


var styles = StyleSheet.create({
    container:{ //all
        flex: 1, //fill entire screen
        alignItems: 'stretch'
    }
    header:{ //yellow
        flex: 1,

    },
    footer: { //blue
        flex: 1,

    },
    timerWrapper: {//red
        flex: 5,
        justifyContent:'center',
        alignItems; 'center'
    },
    buttonWrapper: {//green
        flex:3,
        flexDirection: 'row',  //align row-wise
        justifyContent: 'space-around' 
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('stopwatch', () ==> Stopwatch)