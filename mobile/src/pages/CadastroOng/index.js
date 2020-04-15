import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, AsyncStorage, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import api from '../../../src/services/api';

import styles from './styles';


export default function CadastrarOng() {
    const [name, setOngName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCidade] = useState('');
    const [uf, setUF] = useState('');

    const navigation = useNavigation();


    async function handleCadastro() {
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            navigation.navigate('Login');
        }catch(err){
            alert(`Erro no cadastro. Tente novamente.\r\n\r\n${err.response.data.message}\r\n\r\nStatus Code:${err.response.data.statusCode}`);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.description}>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Text>

            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.inputBase}
                    placeholder='Nome da Ong'
                    onChangeText={text => setOngName(text)} />

                <TextInput
                    style={styles.inputBase}
                    placeholder='E-mail'
                    onChangeText={text => setEmail(text)} />

                <TextInput
                    style={styles.inputBase}
                    placeholder='Whatsapp'
                    onChangeText={text => setWhatsapp(text)} />

                <TextInput
                    style={styles.inputBase}
                    placeholder='Cidade'
                    onChangeText={text => setCidade(text)} />

                <TextInput
                    style={styles.inputBase}
                    placeholder='UF'
                    onChangeText={text => setUF(text)} />
            </View>

            <Button
                color="#e02041"
                title="Cadastrar"
                onPress={handleCadastro} />
        </View>
    );
}