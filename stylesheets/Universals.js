import { StyleSheet } from 'react-native';

export const Universals = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    mainContainer: {
        marginTop: 50,
        alignItems: 'center'
    },
    label: {
        fontSize: 20
    },
    textInput: {
        borderWidth: 1,
        width: 250,
        height: 50,
        marginLeft: 5,
        marginTop: 20,
        fontFamily: 'Helvetica',
        fontSize: 15,
        padding: 10
    },
    button: {
        marginTop: 20,
        width: 250,
        height: 40,
        backgroundColor: 'gray',
        borderWidth: 0.5,
        justifyContent: 'center'
    }
}) 