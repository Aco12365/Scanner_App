import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, Button} from 'react-native';

const executive = ['aca12365@outlook.com','Aco','Security123']
let database = [executive]

export function Database (){
    return(database)
}



export function Signup({navigation}){
    const [user, userOutput] = useState('')
    const [pass, passOutput] = useState('')
    const [email, emailOutput] = useState('')

    const userInput = (Text) =>{
        userOutput(Text)
    }
    const passInput = (Text) =>{
        passOutput(Text)
    }
    const emailInput = (Text) =>{
        emailOutput(Text)

    }

    const createAccount = ({navigation}) =>{
        database.push([email,user,pass])
        navigation.navigate('Login')
        
    }

    return(
        <View style = {styles.containerMain}>

        <View style = {{flexDirection: 'row',justifyContent: 'center'}}>
            <Text style = {styles.font1}>Create new account</Text>
        </View>
        <View>
        <TextInput 
        style = {styles.textInput}
        placeholder = 'Email'
        placeholderTextColor = 'black'
        onChangeText = {emailInput}
        />
        <TextInput 
        style = {styles.textInput}
        placeholder = 'Username'
        placeholderTextColor = 'black'
        onChangeText = {userInput}

        />
        <TextInput 
        style = {styles.textInput}
        placeholder = 'Password'
        placeholderTextColor = 'black'
        onChangeText = {passInput}
        />
        <Button
        title = "Create Account"
        color = 'black'
        onPress = {() => createAccount({navigation})}
        />
        
        </View>

        <View style = {{flexDirection: 'row',justifyContent:'center'}}>
        <Image source = {require("../Images/image1.png")}/>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#03DAC6',
        padding: 30
      },
    font1:{
        fontSize: 30,
        fontWeight: 'bold',
      
      },
    textInput: {
        backgroundColor: '#BBDEFB',
        borderRadius: 25,
        height: 65,
        paddingHorizontal: 20,
        marginTop: 20
    }
})