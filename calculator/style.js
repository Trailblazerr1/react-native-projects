import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    rootcont: {
        flex: 1
    },

    displaycont: {
        flex: 2,
        backgroundColor: '#0277BD',
        justifyContent: 'center'
    },
    dispText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputcont: {
        flex: 8,
        backgroundColor: '#01579B'
    },
    inputbtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputbtntext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default style;