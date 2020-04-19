import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, AsyncStorage, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import api from '../../../src/services/api';

import styles from './styles';


export default function CadastrarIncidente() {    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState();

    const navigation = useNavigation();

    async function handleCadastro() {
        const ongId = await AsyncStorage.getItem('ongId');

        const data = {
            title,
            description,
            value
        }

        try{
            const response = await api.post('incidents', data,{
                headers: {
                    Authorization: ongId
                }
            });

            Alert.alert('Be The Hero','Incidente cadastrado com sucesso!');
            navigation.navigate('Incidents');
        }catch(err){
            alert(`Erro ao cadastrar o incidente. Tente novamente.\r\n\r\n${err.response.data.message}\r\n\r\nStatus Code:${err.response.data.statusCode}`);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <Text style={styles.title}>Cadastrar novo caso</Text>
            <Text style={styles.description}>Descreva o caso detalhadamente para encontrar um herói que irá salvar o seu dia.</Text>

            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.inputBase}
                    placeholder='Titulo'
                    onChangeText={text => setTitle(text)} />

                <TextInput
                    style={[styles.inputBase,{height: 200, textAlignVertical:'top'}]}
                    multiline={true}
                    placeholder='Descrição detalhada'
                    onChangeText={text => setDescription(text)} />

                <TextInput
                    style={styles.inputBase}
                    placeholder='Valor em Reais. ex.: 220.43'
                    onChangeText={text => setValue(text)} />
            </View>

            <Button
                color="#e02041"
                title="Cadastrar"
                onPress={handleCadastro} />
        </View>
    );
}