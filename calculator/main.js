
import React, { Component } from 'react';
import {
    Text,
    AppRegistry,
    View
} from 'react-native';
import style from './style'
import InputBtn from './inputbtn'

const btns= [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
]

class cal extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        inputVal: 0
      };
    }

    render() {
        return (
            <View style={style.rootcont}>
                <View style={style.displaycont}>
                    <Text style={style.dispText}>{this.state.inputVal}</Text>
                </View>
                <View style={style.inputcont}>
                    {this.renderbtns()}
                </View>
            </View>
        )
    }

    renderbtns() {
        let views = []
        for (r = 0;r<btns.length;r++) {
            let row = btns[r]
            let inputRow = []
            for(i=0;i<row.length;i++) {
                let input = row[i]
                inputRow.push(
                        <InputBtn value={input}
                            onPress={this.btnPressed.bind(this,input)}
                            key={r+"-"+i}/>
                    )
            }
            views.push(<View style={style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views
    }

    btnPressed(input) {
            if(typeof input == 'number') {
                let inputVal = (this.state.inputVal * 10) + input
                //alert(input)
                this.setState({
                    inputVal: inputVal
                })
            }
        }

}



AppRegistry.registerComponent('cal', () => cal);
