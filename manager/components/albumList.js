import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumdetail';

// const AlbumList = () => {
//     return (
//         <View >
//             <Text>Album List!!</Text>
//         </View>
//         );
// };


//classes don't require simcolons
class AlbumList extends Component {
    state = {
         albums: []
    };

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
                <AlbumDetail key={album.title} album={album} />
            );
    }

    render() {
     return (
         <ScrollView >
             {this.renderAlbums()}
         </ScrollView>
         );
    }
}

export default AlbumList;
