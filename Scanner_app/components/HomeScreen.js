import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image,Button, MaskedViewIOS } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {ViewFinder} from './VeiwFinder'

export var dict = {
  imei: null,
  serial: null,
  sim: null
}

export function Home ({navigation}){

  function isChar(str){
    return isNaN(str)
  }
    const [scanned, setScanned] = useState(true);
    const [stat, setStat] = useState('');


    const ScanType = (data) => {
      
      if (data.length == 15){
        if (dict.imei == null) {
          dict.imei = data;
          alert("imei Number: " + dict.imei);
        } else{
          alert("Already Scanned imei");
        }
        

      }else if (isChar(data.charAt(0)) && isChar(data.charAt(0))){
        if (dict.serial == null){
          dict.serial = data;
          alert("Serial Number: " + dict.serial);
        } else {
          alert('Already Scanned Serial number');
        }
        

      }
      

    }
  
    const handleBarCodeScanned = ({data}) => {
      setScanned(true); 
      setStat('')
      ScanType(data);

    };

    const prompt = () => {
        setStat('<READY TO SCAN>')
        setScanned(false)
    }

    const ScansCompleted = (imei, Serial) => {
        if (imei == null || Serial == null){
          return (
            <View style = {{
              borderRadius: 20,
              marginBottom: 100,
              backgroundColor: 'white',
              marginLeft: 80,
              marginRight:80
  
          }}>
          {scanned && <Button title={'Tap to Scan'} color = 'red' onPress={() => prompt()} />}   
          </View>
          )
        }
        else {
          return(
            <View style = {{
              borderRadius: 20,
              marginBottom: 100,
              backgroundColor: 'white',
              marginLeft: 80,
              marginRight:80
  
          }}>
          {<Button title={'Submit Data'} color = 'red' onPress={() => submit({navigation})} />}   
          </View>
          )
        }
        
    }

    const submit = ({navigation}) => {
      navigation.navigate('Data');
      return
    }
    
    return (
        

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined: handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          
        />
        <ViewFinder
         
        />
        

        <View style = {{
            borderRadius: 20,
            marginBottom: 500,
            flexDirection: 'row',
            justifyContent: 'center',

        }}>
          <Text style = {{color: 'red', fontSize: 40}}>{stat}</Text>
        </View>
        {ScansCompleted(dict.imei,dict.serial)}

        
        </View>

  
        

    );

}