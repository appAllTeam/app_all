import React from 'react';
import { StatusBar, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

export default function Login() {
 return (
  <SafeAreaView style={styles.container}>
      <StatusBar/>

        <Image source={require('../assets/iconeAll2.png')} />      
        <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=> {}}
        />
        
        <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=>{}}
            secureTextEntry={true}
        />

        <TouchableOpacity>
            <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btnText}>Criar conta gratuita</Text>
        </TouchableOpacity>

        <TouchableOpacity >
            <Text style={styles.btnText}>Recuperar senha</Text> 
    </TouchableOpacity>

</SafeAreaView>
 );
}


const styles = StyleSheet.create({
container:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 30,
    paddingTop: 100
},

tituloText:{
    color: '#fff',
    fontSize: 28,
    textAlign: 'center'
},

input:{
    backgroundColor: '#fff',
    color: '#000000',
    width: '90%',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
},

submitText:{
    backgroundColor: '#229ce3',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 18
},

btnText:{
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: 150,
    textAlign: 'center',
    fontSize: 14
}, 


});