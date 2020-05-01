import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import FadeIn from '../animations/FadeIn';

const width = Dimensions.get('window').width;

const CanvasLanding = () => (
        <FadeIn style={{marginTop: 25}}>
            <Text style={{marginBottom: 15, fontFamily: 'Helvetica', 
                fontSize: 18, marginLeft: 5 }}>Happenings</Text>
            <View style={{borderBottomWidth: 0.75, width: width - 5 }}></View>
        </FadeIn>
)

export default CanvasLanding;