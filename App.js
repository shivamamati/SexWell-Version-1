import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome.js';
import Login from './screens/Login.Js';
import Register from './screens/Register.js';
import Homepage from './screens/Homepage.js';
import Calendar from './screens/Features/calender.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Welcome} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'red' 
          } 
        }} />
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          title:'Login',
          headerStyle: { backgroundColor: 'white'}, 
          headerLargeStyle:{backgroundColor:'white'}}}/>
        <Stack.Screen 
        name="Register" 
        component={Register}/>
        <Stack.Screen 
        name="Homepage" 
        component={Homepage} 
        options={{
          title:'My Sexual Health Profile', 
          headerBackVisible:false}}/>
        <Stack.Screen 
        name="Calendar" 
        component={Calendar} 
        options={{
          title:'My Calendar', 
          headerBackVisible:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;