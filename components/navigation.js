import React, {Component} from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer}  from "@react-navigation/native"

import StartCubing  from '../Screens/Startcubing'
import BottomTabNavigator from '../components/BottomTabNavigator'

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component{

    render(){ 
         return(
                    <NavigationContainer>
                    <Stack.Navigator
                    intialRouteName="Home"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
                    <Stack.Screen name="StartCubing" component={StartCubing} />
                    </Stack.Navigator>
                   </NavigationContainer>


       )
   }
}