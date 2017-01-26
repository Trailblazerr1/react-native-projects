import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListView
} from 'react-native';
import ListItem from './listItem';


class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(this.this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return ( 
                <ListView
                    DataSource={this.DataSource}
                    renderRow={this.renderRow}
                />
            );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
