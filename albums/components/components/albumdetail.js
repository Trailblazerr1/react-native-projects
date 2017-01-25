import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {
    return (
            <Card>
                <CardSection>
                    <View>
                        <Image 
                            style={styles.thumbStyle}
                            source={{ uri: props.album.thumbnail_image }} 
                        />
                        
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text>{props.album.title}</Text>
                        <Text>{props.album.artist}</Text>
                    </View>
                </CardSection>
            </Card>
        );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;
