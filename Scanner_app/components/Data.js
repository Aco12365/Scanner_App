import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {dict} from './HomeScreen'
export function Data() {

     

    return (
        <View style = {styles.containerMain}>
            <View>
            <Text style = {styles.font2}>Data ssubmitted</Text>
            </View>
            <View>
            <Text style = {styles.font2}>Imei Number: {dict.imei}</Text>
            <Text style = {styles.font2}>Serial Number: {dict.serial}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#03DAC6',
        padding: 55
      },
      font1:{

      },
      font2: {
        color: 'black',
        fontSize: 17,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20

    },
});