import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../../src/services/api';


export default function Login() {
    const [login, setLogin] = useState('');

    const navigation = useNavigation();

    let ongName;
    
    async function limparStorageLogin(){
        await AsyncStorage.removeItem('ongId');
        await AsyncStorage.removeItem('ongName');
    }

    async function handleLogin(){

        if (login.trim() == '') {
            Alert.alert(
                'Be The Heroe',
                'Deseja seguir informar o login?',
                [
                    {text: 'Sim', onPress: () => navigation.navigate('Incidents')},
                    {text: 'Não', onPress: () => { return }}
                ],
                {onDismiss: () => { return } }
            )
        }
        else
        {
            try {
                ongName =  await validarLogin(login);
    
                AsyncStorage.setItem('ongId', login);
                AsyncStorage.setItem('ongName', ongName);

                navigation.navigate('Incidents');

    
            } catch (error) {
                alert('Falha no Login. Tente Novamente');
            }
        }


    }

    async function validarLogin(login){
        try {
            const response = await api.post('sessions', { id: login });

            return response.data.name;
        } catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            limparStorageLogin();        
        });

    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.loginGroup}>
                <Text style={styles.textLogin}>
                    Login
                </Text>

                <View style={styles.camposLogin}>
                    <TextInput 
                        style={styles.loginInput}
                        placeholder='Digite seu Ong ID'
                        onChangeText={text => setLogin(text)} />
                    <Button 
                        color="#e02041"
                        title="Entrar" 
                        onPress={handleLogin}/>
                </View>
                <View style={styles.semCadastroGroup}>
                    <TouchableOpacity 
                        style={styles.semCadastroTouchable}
                        onPress={() => {navigation.navigate('CadastrarOng')}}
                    >
                        {/* <Feather name="log-in" size={15} /> */}
                        <Text style={styles.semCadastroText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logarSemCadastroGroup}>
                    <Text style={styles.logarSemCadastroText}>Para logar sem cadastro, basta seguir sem preencher o campo de login.</Text>
                </View>
            </View>
        </View>
    );
}