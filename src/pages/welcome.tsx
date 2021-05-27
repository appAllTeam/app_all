import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import { SafeAreaView }  from 'react-native-safe-area-context';

import  {useFonts, Itim_400Regular } from '@expo-google-fonts/itim';
import {Inter_900Black} from '@expo-google-fonts/inter';
import Apploaded from 'expo-app-loading';


export function Welcome(){

    let [fontsLoaded] = useFonts({
         Itim_400Regular, Inter_900Black
      });

      if(!fontsLoaded){
          return <Apploaded />;
      }

return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Image source={require('../assets/iconeAll2.png')} />

            <Text style={styles.textoInicio}>
                Aqui você encontra de tudo para sua casa, desde uma caneta a um serviço de reforma!
            </Text>

            <TouchableOpacity style={styles.button}
                activeOpacity={0.5}
                >
                    <Text style={styles.textButton}>Avançar</Text>
            </TouchableOpacity>
        </SafeAreaView>
)
};

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    textoInicio: {
        color: '#f2f2f2',
        fontSize: 36,
        padding: 20,
        textAlign: 'center',
        fontFamily: 'Inter_900Black'
    },

    button: {
        position: 'absolute',
        backgroundColor: '#6699ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        width: '90%',
        bottom: 0
    },

    textButton:{
        fontSize: 24,
        fontFamily: 'Itim_400Regular',
        color: '#f2f2f2'
    },
})