import React, {Component} from 'react';
//{} enables us to skip react.component
import {
  Text,
  AppRegistry,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchdata} from './weatherapi'
import Hightlight from "react-native-highlight-words"

const iconname = {
  Clear:"md-sunny",
  Rain:"md-rainy",
  Thunderstorm:"md-thunderstorm",
  Clouds:"md-cloudy",
  Snow:"md-snow",
  Drizzle:"md-umbrella",
}

const phrases ={
  Clear: {
    title:"All clear ",
    subs:"is the sky",
    high:"clear",
    color:"blue" ,
    background:"green",  
  },
  Snow:{
    title:"snow  snow",
    subs:"where's john",
    high:"snow",
  }
}

class App extends Component {
//before render
  componentWillMount() {
    this.state = {
      temp:0,
      weather: 'Clear'
      }//object
  }

//after render
  componentDidMount() {
    this.getLoc()
/*  
//access returned data by then method
    fetchdata(21,22).then(res => console.log(res))
//two args a fun and interval in ms
    setInterval(()=>{
      //setstate takes object as arg
      this.setState({hidebar:true})
    }, 1000)*/
  }

  getLoc() {
    //this method takes two fun and one object
    navigator.geolocation.getCurrentPosition(
      (posData) => fetchdata(posData.coords.latitude,posData.coords.longitude)
        //fetch data returns a promise
        .then(res => this.setState({
          temp:res.temp,
          weather:res.weather
        })),
      (error) => alert(error),
      {timeout:10000}
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
          <Icon name={iconname[this.state.weather]} size={80} color={"white"}/>
          <Text style={styles.temp}> {this.state.temp}</Text>
        </View>
        <View style={styles.body}>
          <Hightlight
            style={styles.title}
            highlightStyle={{color:'red'}}
            searchWords={[phrases[this.state.weather].high]}
            textToHighlight={phrases[this.state.weather].title}
          />
          <Text style={styles.subs}>{phrases[this.state.weather].subs}</Text>
        </View>
      </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1, //for child
    backgroundColor:"#FFD017"
  },
  header: {
    flex:1,
    flexDirection:"row",  //along x axis
    alignItems:"center",
    justifyContent:"space-around",
   // backgroundColor:"orange"
  },
  temp: {
    fontFamily:'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  body: {
    flex:5,
    alignItems:"center",
    alignItems:"flex-start",
    justifyContent:"flex-end",
   // backgroundColor:"yellow",
    margin:10
  },
    title: {
    fontFamily:'HelveticaNeue-Bold',
    fontSize: 78,
    color: 'white',
    marginBottom:5
  },
    subs: {
    fontFamily:'HelveticaNeue-Bold',
    fontSize: 20,
    color: 'white'
  }
})


AppRegistry.registerComponent("weather",() => App)