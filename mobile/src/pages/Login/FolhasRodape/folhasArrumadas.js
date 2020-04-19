import React from 'react';
import { View} from 'react-native' ;

import styles from './styles';
import RetornaIcone from '../../../SVGComponents/RetornaIcones';

export default function FolhasArrumadas() {
    return (
        <View style={styles.containerFolhas}>
            <View style={{}}>
                <RetornaIcone nomeIcone='folhaSecundaria' opacidade={0.20}/>
                <RetornaIcone nomeIcone='folhaPrimaria' style={{ marginTop: -180, marginLeft: 10 }} />
            </View>
            <View style={{}}>
                <RetornaIcone nomeIcone='folhaSecundaria' opacidade={0.20}/>
                <RetornaIcone nomeIcone='folhaPrimaria' style={{ marginTop: -180, marginLeft: 10 }} />
            </View>
        </View>
    )
}
