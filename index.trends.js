import React, {Component} from 'react'
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import {fetchdata} from './trendsapi'
import Swiper from 'react-native-swiper';


const bc = {
    one:'#2E86C1',
    two:'#E74C3C',
    three:'#229954',
    four:'#BA4A00',
    five:'#17A589',
    six:'#F1C40F',
    seven:'#FF4500',
    eight:'#2980B9',
    nine:'#FF1493',
    ten:'#A569BD',
}

class App extends Component {

componentWillMount() {
  this.state ={
    ready:false,
    one:'',
    two:'',
    three:'',
    four:'',
    five:'',
    six:'',
    seven:'',
    eight:'',
    nine:'',
    ten:'',
  }
}

componentDidMount() {
  fetchdata().then(res => this.setState({
    one:res[0],
    two:res[1],
    three:res[2],
    four:res[3],
    five:res[4],
    six:res[5],
    seven:res[6],
    eight:res[7],
    nine:res[8],
    ten:res[9],
    ready:true,
  }))
  
}
/*        <View style={styles.header}>
          <Text style={styles.title}> Top trends!</Text>
        </View>*/
//display the usual shit
  render() {
    var {ready} = this.state
    if(ready) 
    return (

      <Swiper style={styles.container}
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        loop={false}
        onMomentumScrollEnd={this.onMomentumScrollEnd}

      >

        <View style={[styles.bottom,{backgroundColor:bc.one}]}>
          <Text style={styles.caption}> {this.state.one} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.two}]}>
          <Text style={styles.caption}> {this.state.two} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.three}]}>
          <Text style={styles.caption}> {this.state.three} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.four}]}>
          <Text style={styles.caption}> {this.state.four} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.five}]}>
          <Text style={styles.caption}> {this.state.five} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.six}]}>
          <Text style={styles.caption}> {this.state.six} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.seven}]}>
          <Text style={styles.caption}> {this.state.seven} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.eight}]}>
          <Text style={styles.caption}> {this.state.eight} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.nine}]}>
          <Text style={styles.caption}> {this.state.nine} </Text>          
        </View>
        <View style={[styles.bottom,{backgroundColor:bc.ten}]}>
          <Text style={styles.caption}> {this.state.ten} </Text>          
        </View>
      </Swiper>
      )
    else
    return (
        <View style={styles.horizontal}>
          <Text style={styles.title}>HOT-</Text>
          <Text style={styles.title}>TRENDS</Text>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
        </View>
    ) 
  }
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems:"center",
  },
  bottom: {
    flex:1, 
    justifyContent:"flex-end",
 //   bottom: 150,
   // backgroundColor:"#3498DB",

  },
   title: {
    fontFamily:'monospace',
    fontSize: 28,
    color: 'blue',
    //marginBottom:5
  },
   caption: {
    fontFamily:'monospace',
    fontSize: 28,
    color: 'white',
    height:200
  },
  horizontal: {
    justifyContent: 'space-around',
    padding: 150,
  },
})

AppRegistry.registerComponent("trends", () => App)