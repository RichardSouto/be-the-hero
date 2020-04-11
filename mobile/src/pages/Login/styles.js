import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 2,
        backgroundColor: "#f0f0f5",
    },

    loginGroup: {
        flex: 1,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    camposLogin: {
        width: 250,
        marginBottom: 10,
        marginTop: 10,
    },

    textLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    loginInput: {
        height: 30,
        color: "#333",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        borderWidth: 1,
        borderColor: '#dcdce6',
        paddingLeft: 10,
        marginBottom: 5,
        backgroundColor: '#FFF',
        marginBottom: 10

    },

    semCadastroGroup: {
        width: 250,
        marginTop: 10
    },

    semCadastroTouchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    semCadastroText: {
        fontSize: 15,
    },

    logarSemCadastroGroup: {
        paddingTop: 10,
        width: 250
    },

    logarSemCadastroText: {
        fontSize: 14,
        color: '#6e6e6e',
        textAlign: 'center'
    }

})