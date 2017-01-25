import React from 'react';
import {  
  Text,
  View,
  Image,
  Button,
  Linking
} from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {

    onButtonPress = () => {
        Linking.openURL(props.album.url);
    };

    return (
            <Card >
                <CardSection>
                    <View style={styles.thumbContStyle}>
                        <Image 
                            style={styles.thumbStyle}
                            source={{ uri: props.album.thumbnail_image }} 
                        />
                        
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.albumText}>{props.album.title}</Text>
                        <Text>{props.album.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image 
                        style={styles.cardImage}
                        source={{ uri: props.album.image }}
                    />
                </CardSection>

                <CardSection>
                <Button 
                    title="Buy now"
                    color="#841584"
                    onPress={onButtonPress}
                />
                </CardSection>
            </Card>
        );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    cardImage: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbStyle: {
        height: 50,
        width: 50
    },
    thumbContStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumText: {
       fontSize: 18 
    }
};

export default AlbumDetail;
