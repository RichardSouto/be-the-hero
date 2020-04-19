import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, Button, AsyncStorage, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import api from '../../../src/services/api';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [totalIncidents, setTotalIncidents] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (totalIncidents > 0 && incidents.length == totalIncidents) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotalIncidents(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        navigation.addListener('focus',loadIncidents)
    }, []);

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function handleNovoIncidente() {
        const ongId = await AsyncStorage.getItem('ongId');

        if (ongId == undefined || ongId.trim() == '') {
            Alert.alert(
                'Be The Heroe',
                'Nenhuma ong logada no momento.\r\n\r\nDeseja realizar o login para cadastrar um novo incidente?',
                [
                    { text: 'Sim', onPress: () => navigation.navigate('Login') },
                    { text: 'Não', onPress: () => { return } }
                ],
                { onDismiss: () => { return } }
            )
            return;
        }

        navigation.navigate('CadastrarIncidente');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

            <TouchableOpacity
                style={styles.novoIncidenteTouchable}
                onPress={handleNovoIncidente}
            >
                <Feather name="plus-circle" size={16} color="#E02041"></Feather>
                <Text style={[styles.detailsButtonText,{marginLeft :5}]}>Adicionar Incidente</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty, { marginTop: 0 }}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                        </TouchableOpacity>

                    </View>
                )}
            />
        </View>
    );
}