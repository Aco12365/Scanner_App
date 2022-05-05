import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Database} from './Signup/'
   
let User = ''


export function Users(){
    return (
        <Text style ={styles.font1}>Welcome {User}</Text>
    )
}


export function Login({navigation}){
    
        )
    }
    
    return(

        <View style = {styles.containerMain}>
        
        <View style = {{flexDirection: 'row',justifyContent:'center', marginBottom: 30}}>
        <Image source = {require("../Images/image1.png")}/>
        </View>
        <OutputMessage />
        <View style = {{flexDirection: 'row',marginTop:15, justifyContent: 'center'}}>
        <Text style= {styles.font1}>Scanner App</Text>
        </View>

       

        <View>
        <TextInput 
        style = {styles.textInput}
        placeholder = 'Username/Email'
        placeholderTextColor = 'black'
        onChangeText = {inputHandlerUser}
        
        />
        <TextInput 
        style = {styles.textInput}
        placeholder = 'Password'
        placeholderTextColor = 'black'
        onChangeText = {inputHandlerPass}
        />
        <Button
        title = "Login"
        color = 'black'
        onPress = {() => inputChecker(user,pass,{navigation})}
        />
        </View>
       
        <View style = {{flexDirection: 'row', marginTop: 15}}>
            <Text style = {{fontSize: 15 }}>Don't have an account?</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Signup') }>
                <Text style = {{fontSize: 15, color: 'blue'}}>Signup</Text>
            </TouchableOpacity>
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
        fontSize: 35,
        fontWeight: 'bold',
      
      },
      font2: {
          color: 'red',
          fontSize: 20,
          flexDirection: 'row',
          justifyContent: 'center',

      },
    textInput: {
        backgroundColor: '#BBDEFB',
        borderRadius: 25,
        height: 65,
        paddingHorizontal: 20,
        marginTop: 10,
    

    }

})