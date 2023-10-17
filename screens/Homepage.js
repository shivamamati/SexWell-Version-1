import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity} from "react-native";
import { AntDesign, FontAwesome5, Foundation, Octicons, Feather } from '@expo/vector-icons'; 


const Homepage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'pink'}}>
    <View style={{marginTop: 50, paddingLeft: 25}}>
        <Text style={{fontSize:40, fontWeight:'bold', color:"red"}}>Welcome</Text>
        <Text style={{fontSize:20}}>What would you like to do today?</Text>
    </View>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}
        style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 30,marginLeft:20, marginRight:20,flexDirection:'row'}}>
        <AntDesign name="calendar" size={30} color="white" /> 
        <Text style={{textAlign:'center',paddingTop:5, paddingLeft:5, fontWeight:'700', fontSize:16, color: 'white'}}>View My Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 15,marginLeft:20, marginRight:20,flexDirection:'row'}}>
        <FontAwesome5 name="user-circle" size={30} color="white" />
      <Text style={{textAlign:'center',paddingTop:5, paddingLeft:5, fontWeight:'700', fontSize:16, color: 'white'}}>Edit My Sexual Health Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 15,marginLeft:20, marginRight:20,flexDirection:'row'}}>
        <AntDesign name="team" size={30} color="white" />
        <Text style={{textAlign:'center',paddingTop:5, paddingLeft:5, fontWeight:'700', fontSize:16, color: 'white'}}>Therapists In My Area</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 15,marginLeft:20, marginRight:20,flexDirection:'row'}}>
        <Foundation name="web" size={30} color="white" />
        <Text style={{textAlign:'center',paddingTop:5, paddingLeft:5, fontWeight:'700', fontSize:16, color: 'white'}}>Access Resources</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 15,marginLeft:20, marginRight:20,flexDirection:'row'}}>
        <Octicons name="dependabot" size={30} color="white" />
        <Text style={{textAlign:'center',paddingTop:5, paddingLeft:5, fontWeight:'700', fontSize:16, color: 'white'}}>SexWell AI Chatbot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'grey', padding:20, borderRadius:10, marginTop: 15,marginLeft:70, marginRight:60,flexDirection:'row', alignContent:'center'}}>
        <Feather name="settings" size={30} color="white" style={{paddingLeft:50}}/>
        <Text style={{textAlign:'center',paddingTop:5, paddingLeft:5, fontWeight:'700', fontSize:16, color: 'white', textAlign:'center'}}>Settings</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView> 
  )
}

export default Homepage;