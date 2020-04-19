import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import RetornaIcone from '../../../SVGComponents/RetornaIcones';

export default function NuvemsTopo() {
    return (
        <View style={styles.containerNuvems}>
            <View style={{}}>
                <RetornaIcone nomeIcone='nuvem' 
                    height={70} 
                    width={200} 
                    opacidade={0.50} 
                    style={{ marginBottom: -50, marginLeft: -30 }} />
                <RetornaIcone nomeIcone='nuvem' height={70} style={{ marginLeft: 10 }} />
            </View>
            <View style={{marginTop: 50}}>
                <RetornaIcone nomeIcone='nuvem'
                height={70}
                width={200}
                opacidade={0.6} 
                style={{ marginBottom: -50, marginRight: -20, marginLeft:50 }} />
                <RetornaIcone nomeIcone='nuvem' height={70} style={{ marginLeft: -20 }} />
            </View>
        </View>
    )
}
