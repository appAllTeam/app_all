import React from 'react';
import { KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

export default function Login() {
 return (
  <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.containerLogo}>
        <Image
           source={require('../assets/iconeAll2.png')}
        />
        <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Para começarmos por favor faça o Login!</Text> 
        </TouchableOpacity>
    


    <SafeAreaView style={styles.inputs}>
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
    </SafeAreaView>
        <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>Criar conta gratuita</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>Recuperar senha</Text> 
    </TouchableOpacity>
    </SafeAreaView>
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
    paddingTop: 5,
    paddingBottom: 50
},

 containerLogo:{
    flex:1,
    justifyContent:'center',
    paddingTop: 100,
    alignItems: 'center'
 },

 input:{
    backgroundColor: '#FFF',
    width: 320,
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius: 20,
    padding: 15,
 },

 btnSubmit:{
    backgroundColor: '#35AAFF',
    width: 200,
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
 },

 submitText:{
    color: '#FFF',
    fontSize:18
 },

 btnRegister:{
    marginTop: 1,
    marginBottom: 2,
    paddingTop: 20
 },

btnText:{
    color: '#fff'
    
},

 registerText:{
    color: '#FFF',
    paddingBottom: 100,
    fontSize: 24,
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40
 },

 inputs:{
     paddingBottom: 20,
     marginTop: 0
 },
});