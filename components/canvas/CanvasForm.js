import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';


import HappeningsLanding from '../../images/happenings-landing.png';
import { Universals } from '../../stylesheets/Universals';

const CanvasForm = () => {
    return (
        <View style={{...Universals.main}}>
            <Image source={HappeningsLanding} style={{ width: 350, height: 100, marginTop: 45 }} />
            <View style={Universals.mainContainer}>
                <Text style={{ width: 200, textAlign: 'center', 
                    fontFamily: 'Helvetica', fontSize: 14 }}>
                    To create a poster, let's get some information first.
                </Text>
                <TextInput style={Universals.textInput} placeholder="Title" />
                <TextInput style={Universals.textInput} placeholder="Author" />
                <TouchableOpacity style={Universals.button}>
                    <Text style={{color: 'white', textAlign: 'center'}}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CanvasForm;