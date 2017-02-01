import React, { Component } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
//import Dimensions from 'Dimensions';

const screen = Dimensions.get('window');

class MovieList extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.row}
                activeOpacity={0.7}
            >
                <Image source={{ uri: 'http://resizing.flixster.com/bYZNF29KxMRsGtjfAu22m5Yh1E8=/600x400/v1.aDsxMzcxMjQ7ajsxNzI0NTsyMDQ4OzEzMDQ7ODcw' }} style={styles.imgBackground}>
                    <Text style={styles.nameStyle}>
                        Resident Evil
                    </Text>
                </Image>
            </TouchableOpacity>
            );
    }
}

const styles = StyleSheet.create({
    row: {
        //paddingBottom: 4,
    },
    imgBackground: {
        paddingTop: 50,
        height: screen.height / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
        fontSize: 34,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    }
}); 

export default MovieList;
