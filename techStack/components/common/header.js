//import a lib

import React from 'react';
import {
  Text,
  View,
} from 'react-native';


const Header = (props) => {
    //style
    const { textStyle, viewStyle } = styles;


    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        );
};

//camelcase
const styles = {
    textStyle: {
        fontSize: 20
    },
    //everything 
    viewStyle: {
        alignItems: 'center', //horz 'flex-start/end'
        justifyContent: 'center', //vertical dir
        backgroundColor: '#F8F8F8',
        shadowColor: '#0f0f0f',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.9,
        height: 60,
        paddingTop: 15
    }
};

export default Header;
