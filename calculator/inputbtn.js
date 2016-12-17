import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View,
    TouchableHighlight
} from 'react-native';
import style from './style'

export default class InputBtn extends Component {
    render() {
        return(
                <TouchableHighlight style={style.inputbtn}
                    onPress={this.props.onPress}
                    underlayColor="#555555"    
                            >
                    <Text style={style.inputbtntext}>
                        {this.props.value}
                    </Text>
                </TouchableHighlight> 
            )
    }
}