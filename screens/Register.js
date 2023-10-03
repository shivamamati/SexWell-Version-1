import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, Feather } from '@expo/vector-icons';

function Register({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'pink'}}>
    <View style={{alignItems: 'center', marginTop: 120}}>
        <Text style={{fontSize:80, fontWeight:'bold', color:"red"}}>SexWell</Text>
    </View>
    
    <View style={{ 
   
      backgroundColor: 'white', 
      marginHorizontal: 20, 
      marginVertical:20, 
      paddingBottom:30,
      borderRadius:20,
      borderWidth: 5,
      borderColor: 'red',
      }}>
      <Text style={{
        fontSize:24,
        fontWeight:"500",
        color:"#333",
        marginTop:30,
        marginLeft: 30,
        fontFamily: 'Arial'
        }}>
      Register
      </Text>
        <View 
        style={{
          flexDirection:'row',
           marginLeft:20, 
           borderBottomColor:'black', 
           borderBottomWidth:1, 
           paddingBottom:1, 
           marginRight:15, 
           paddingTop: 5}}>
          <AntDesign name="user" size={30} color="red" style={{marginTop: 20, flexDirection:'row'}}/>
          <TextInput 
          placeholder='Create a Pin' 
          style={{ marginLeft:10,marginTop:20, fontSize:15, flex: 1, paddingVertical: 10}} 
          keyboardType="email-address"/>
        </View>
        <View 
        style={{
          flexDirection:'row', 
          marginLeft:20, 
          borderBottomColor:"black", 
          borderBottomWidth:0.5, 
          paddingBotton:1, 
          marginRight:15, 
          padingTop:5}}>
          <Feather name="lock" size={24} color="red" style={{marginTop: 20, flexDirection:'row'}}/>
          <TextInput 
          placeholder='Create Password' 
          style={{ marginLeft:10,marginTop:20, fontSize:15, flex: 1, paddingVertical: 10}} 
          secureTextEntry={isSecureEntry}/>
          <TouchableOpacity onPress={() => {setIsSecureEntry((prev) => !prev)}}>
            <Text style={{color:'red', fontWeight: '700', paddingTop:35}}>
              {isSecureEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{}} style={{backgroundColor: 'red', padding:20, borderRadius:10, marginTop: 30, marginHorizontal: 30}}>
          <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color: 'white'}} onPress={() => navigation.navigate('Homescreen')}>Create Account</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

export default Register

 

