import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { SUBMIT_POSTER_FORM } from '../../actions/types';

import { Universals } from '../../stylesheets/Universals';

const CanvasFormFields = ({ navigation, submitPosterMeta }) => {

    const [ posterInfo, setPosterInfo ] = useState({
        title: '',
        author: ''
    });

    

    const { title, author } = posterInfo;

    const submitPosterInfo = () => {
        if ( !title || !author ) return alert('bad input');
        submitPosterMeta(posterInfo);
        navigation.navigate('Canvas');
    }

    return (

        <View style={Universals.mainContainer}>

                <Text style={{ width: 200, textAlign: 'center', 
                    fontFamily: 'Helvetica', fontSize: 14, marginBottom: 5 }}>
                    To create a poster, let's get some information first.
                </Text>

                <TextInput style={Universals.textInput} placeholder="Title" 
                    value={title} onChangeText={(text) => 
                        setPosterInfo({ ...posterInfo, title: text })} 
                />
                <TextInput style={Universals.textInput} placeholder="Author" 
                    value={author} onChangeText={(text) => 
                        setPosterInfo({ ...posterInfo, author: text })} />

                <TouchableOpacity style={Universals.button} onPress={submitPosterInfo}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                        Enter
                    </Text>
                </TouchableOpacity>

        </View>
    )
}

const mdp = dispatch => ({
    submitPosterMeta: (posterInfo) => dispatch({
        type: SUBMIT_POSTER_FORM,
        payload: posterInfo
    })
})

export default connect( null, mdp )(CanvasFormFields);