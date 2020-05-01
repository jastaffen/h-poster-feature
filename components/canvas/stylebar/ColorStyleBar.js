import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, FlatList } from 'react-native';

import { colors } from '../../../utils/colors';

const ColorStyleBar = () => {

    const { crayola } = colors;
    return (
        <SafeAreaView style={{position: 'absolute', bottom: 28, marginLeft: 8}}>
            <FlatList data={crayola} horizontal={true} 
                keyExtractor={item => item.name} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={{backgroundColor: item.hex, 
                        width: 30, height: 30, margin: 10 }} >
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
    
}

export default ColorStyleBar;