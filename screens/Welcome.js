import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity} from "react-native";

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'pink'}}>
    <View style={{alignItems: 'center', marginTop: 150}}>
        <Text style={{fontSize:80, fontWeight:'bold', color:"red"}}>SexWell</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 30, marginHorizontal: 30}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color: 'white'}}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 30, marginHorizontal: 30}}>
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color: 'white'}} >Register</Text>
    </TouchableOpacity>
    </SafeAreaView> )
}

export default Welcome;