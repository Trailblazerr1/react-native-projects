import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

class MovieDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.data.image }} style={styles.imgBack}>
                    <ScrollView style={{ flex: 1 }}>
                        <Text 
                            style={[styles.text, styles.title]}
                        >
                            {this.props.data.title.toUpperCase()}
                        </Text>
                        <Text style={[styles.text, styles.value]}>{this.props.data.rating}%</Text>
                        <View style={styles.plot}>
                            <Text style={styles.plotText}>{this.props.data.plot}</Text>
                        </View>
                    </ScrollView>
                </Image>
            </View>
            );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    imgBack: {
        flex: 1,
        padding: 20
    },
    plot: {
        backgroundColor: 'rgba(255,255,255,0.5)', 
        borderRadius: 10,                   
        marginTop: 40,                      
        padding: 10,               
    },
    plotText: {
        color: '#333',                      
        fontFamily: 'Avenir',          
        fontSize: 15,                     
    },
    text: {
        backgroundColor: 'transparent',     
        color: '#fff',                      
        fontFamily: 'Avenir',               
        fontWeight: 'bold',                 
    // Add text shadow
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    title: {
        fontSize: 22,                       
        marginTop: 30,                      
        marginBottom: 5,                    
        textAlign: 'center',                
  },
  value: {
    fontSize: 16,
    textAlign: 'center'
  }
};

export default MovieDetail;
