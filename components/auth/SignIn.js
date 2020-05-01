import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, 
        Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { SignInStyles } from '../../stylesheets/SignInStyles';
import LongArrow from '../../images/long-arrow.png';
import { SIGN_IN } from '../../actions/types';

import AuthLandingLogo from '../logoComponents/AuthLandingLogo';


const SignIn = ({ login }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = () => {
        if ( !email || !password ) {
            return alert('invalid email or password');
        }

        return login();
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ SignInStyles.main }>
                <AuthLandingLogo />
                <View style={SignInStyles.mainContainer}>
                    <Text style={SignInStyles.label}>Sign in.</Text>
                    <TextInput value={email} 
                        style={SignInStyles.textInput}
                        onChangeText={(text) => setEmail(text)} 
                        placeholder={ 'Email' }
                        autoCapitalize='none'
                    />
                    <TextInput value={password} 
                        style={SignInStyles.textInput}
                        onChangeText={(text) => setPassword(text)} 
                        placeholder={ 'Password' }
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                        <Image source={LongArrow} 
                            style={{marginTop: 15, width: 100, height: 30}} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const mdp = dispatch => ({
    login: () => dispatch({ type: SIGN_IN })
})

export default connect(null, mdp)(SignIn);