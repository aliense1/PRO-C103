import React, {Component} from "react"
import {View,TouchableOpacity,Text} from "react-native"
import { StyleSheet } from "react-native-web"
import before from '../assets/berfore-cross.png'
import after from '../assets/after-cross.png'

export default class StartCubing extends React.Component{

  render(){
    return (
     <View>
      <Text style={styles.heading}>How to solve a rubicks Cube???</Text>
       <Text style={styles.text}>This a extremely easy tutorial to solve a 3 by 3 rubicks cube. This doesn't have very long algorithums. with a little practice
    you can solve it in 1-2 min. This is the begginer method after learning this we will move on to advanced methods.</Text>

   <View style={styles.heading}>
    
    <Text>Cross</Text>
    <Text>First Layer</Text>
    <Text>Second Layer</Text>
    <Text>Top Cross</Text>
    <Text>Aliging cross edge pieces</Text>

    </View> 

    <Text style={styles.heading}>Solving The Cross</Text>

      <View style={styles.steps}>
        
     

                    <Text>Solving the cross on a 3x3 Rubik's Cube is the first steps towards solving the entire cube </Text>
                    <Text>Hold the white center on bottom </Text>
                    <Text>Find edge piece with white on it</Text>
                    <Text>Match the edge pieces with the appropiate center</Text>
                    <Text>Insert the matched edge pieces with the matched center</Text>
                    <Text>Insert the remaining edge pieces repeat Steps 3 and 4 for the remaining edge pieces</Text> 

                <img src={before} style={styles.firImg} width={360}/>    
              
                <img src={after} width={360}/>  
 
      </View>
     </View>
    )
  }
}
const styles = StyleSheet.create ({
 heading :{
   alignItems : 'center',
   justifyContent:'center',
   alignSelf:'center',
   marginTop : 20,
   fontSize : 20,
   fontStyle: 'Bold',
 },

 text : {
  marginTop : 20,
  marginLeft :20,
 },

 steps:{
  marginTop: 20,
  marginLeft:20,
 },

 firImg : {
  flex : 1,
  flexdirection: 'vertical',
  float:'right'
 }
})
