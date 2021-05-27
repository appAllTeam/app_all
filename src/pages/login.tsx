import React from 'react';
<<<<<<< HEAD
import { KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
=======
import { StatusBar, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
>>>>>>> 9a347bca
import { SafeAreaView} from 'react-native-safe-area-context';

export default function Login() {
 return (
  <SafeAreaView style={styles.container}>
<<<<<<< HEAD
    <SafeAreaView style={styles.containerLogo}>
        <Image
           source={require('../assets/iconeAll2.png')}
        />
        <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Para começarmos por favor faça o Login!</Text> 
        </TouchableOpacity>
    


    <SafeAreaView style={styles.inputs}>
=======
      <StatusBar/>

        <Image source={require('../assets/iconeAll2.png')} />      
>>>>>>> 9a347bca
        <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=> {}}
        />
<<<<<<< HEAD
=======
        
>>>>>>> 9a347bca
        <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=>{}}
            secureTextEntry={true}
        />
<<<<<<< HEAD
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
=======

        <TouchableOpacity>
            <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btnText}>Criar conta gratuita</Text>
        </TouchableOpacity>

        <TouchableOpacity >
            <Text style={styles.btnText}>Recuperar senha</Text> 
    </TouchableOpacity>

>>>>>>> 9a347bca
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
<<<<<<< HEAD
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
=======
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


>>>>>>> 9a347bca
});