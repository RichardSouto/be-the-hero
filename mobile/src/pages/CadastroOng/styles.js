import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 2,
        backgroundColor: "#f0f0f5",
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    inputGroup: {
        marginTop: 20,
        marginBottom: 20
    },

    inputBase: {
        height: 30,
        color: "#333",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 1,
        borderColor: '#dcdce6',
        paddingLeft: 10,
        marginBottom: 5,
        backgroundColor: '#FFF',
        marginBottom: 12

    },
})