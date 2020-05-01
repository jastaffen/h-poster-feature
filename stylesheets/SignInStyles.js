import { StyleSheet } from 'react-native';

export const SignInStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 20
    },
    textInput: {
        borderWidth: 1,
        width: 200,
        height: 50,
        marginLeft: 5,
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 15,
        padding: 10
    }
})