import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, Feather } from '@expo/vector-icons';

const Calendar = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'pink'}}>
    <View style={{alignItems: 'center', marginTop: 120}}>
        <Text style={{fontSize:50, fontWeight:'bold', color:"red"}}>Calendar</Text>
    </View>
    </SafeAreaView>
  );
}

export default Calendar;