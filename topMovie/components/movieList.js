import React, { Component } from 'react';
import {
    ListView
} from 'react-native';
import { connect } from 'react-redux';
import MovieCard from './movieCard';


class MovieList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.DataSource = ds.cloneWithRows(this.props.movieList);
    }

    renderRow(rowData) {
        return <MovieCard rowData={rowData} />;
    }

    render() {
        return (
                <ListView  
                    dataSource={this.DataSource}
                    renderRow={this.renderRow}
                />
            );
    }
}


const mapStateToProps = state => {
    return {
        movieList: state.mlist
    }; 
};

export default connect(mapStateToProps)(MovieList);
