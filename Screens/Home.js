import React, {Component} from "react"
import {View,TouchableOpacity,Text} from "react-native"
import { StyleSheet } from "react-native-web"
import bgImage from '../assets/Cube.gif'
import StartCubing from "./Startcubing"

export default class Home extends React.Component{

  render(){
    return (
      <View style={styles.container}>
        <View  style={styles.homeBtn}>

             <TouchableOpacity style={styles.btnSty} onPress={()=>this.props.navigation.navigate("StartCubing")} ><Text>Start Cubing(Master)</Text></TouchableOpacity>
             <TouchableOpacity style={styles.btnSty}><Text>OLL(Grand Master)</Text></TouchableOpacity>
             <TouchableOpacity style={styles.btnSty}><Text>PLL(Legendary)</Text></TouchableOpacity>
      
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container:{
    backgroundColor:"#FFD700",
    flex:1,
  },
  homeBtn:{
    alignSelf: 'center',
    marginTop: 350,
  },
  btnSty:{
    backgroundColor:"#0099CC",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 50,
  }
})

