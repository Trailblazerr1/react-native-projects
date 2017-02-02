import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';


const screen = Dimensions.get('window');

class MovieCard extends Component {
    render() {
        const sendData = () => Actions.detail({ data: this.props.rowData });
        //console.log(this.props.selectedId);
        return (
            <TouchableOpacity
               // onPress={() => this.props.selectMovie(this.props.rowData.rating)} //call action
                onPress={sendData}
                style={styles.row}
                activeOpacity={0.7}
            >
                <Image 
                    source={{ uri: this.props.rowData.cover_image }}
                    style={styles.imgBackground}
                >
                    <Text style={styles.nameStyle}>
                        {this.props.rowData.title}
                    </Text>
                    <View style={styles.rating}>
                        <Image
                            source={{ uri: 'https://staticv2.rottentomatoes.com/static/images/icons/cf-lg.png' }}
                            style={styles.icon}
                        />
                        <Text 
                            style={[styles.nameStyle, styles.value]}
                        >
                            {this.props.rowData.rating}%
                        </Text>
                    </View>
                </Image>
            </TouchableOpacity>
        );
    }
}

const styles = {
     row: {
        paddingBottom: 3,
     },
     imgBackground: {
         paddingTop: 50,
         height: screen.height / 2.3,
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
     },
     title: {
        fontSize: 22,
     },
     rating: {
        flexDirection: 'row',
     },
     icon: {
        width: 22,
        height: 22,
        marginRight: 5,
     },
     value: {
        fontSize: 16,
     }
}; 


export default connect(null, actions)(MovieCard);
