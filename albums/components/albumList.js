import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import axios from 'axios'

// const AlbumList = () => {
//     return (
//         <View >
//             <Text>Album List!!</Text>
//         </View>
//         );
// };


//classes don't require simcolons
class AlbumList extends Component {
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response))
    }

    render() {
     return (
         <View >
             <Text>Album List!!</Text>
         </View>
         );
    }
}

export default AlbumList;
