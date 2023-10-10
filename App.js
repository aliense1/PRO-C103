import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import BottomTabNavigator from "./components/BottomTabNavigator"
import StackNavigator from './components/navigation';


export default function App() {
  return (
    <StackNavigator/>
  );
}

