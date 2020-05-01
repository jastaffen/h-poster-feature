import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../../utils/colors';

import MoveIntoView from '../../animations/MoveIntoView';
import { CHANGE_BACKGROUND_COLOR } from '../../../actions/types';

const ColorStyleBar = ({ backgroundColor, changeBackgroundColor }) => {

    const focusBorder = (color) => {
        if (backgroundColor === color) {
            return 2
        } 
    }

    const { crayola } = colors;
    
    return (
    <MoveIntoView style={{position: 'absolute', bottom: 28, marginLeft: 8}}>
        <SafeAreaView>
            <FlatList data={crayola} horizontal={true} 
                keyExtractor={item => item.name} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ backgroundColor: item.hex, 
                        width: 30, height: 30, margin: 10, 
                        borderColor: "white", borderWidth: focusBorder(item.hex) }}
                        onPress={() => changeBackgroundColor(item.hex)} >
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    </MoveIntoView>
    )
    
}

const msp = state => ({
    backgroundColor: state.background.backgroundColor
})

const mdp = dispatch => ({
    changeBackgroundColor: (color) => dispatch({
        type: CHANGE_BACKGROUND_COLOR,
        payload: color
    })
})

export default connect(msp, mdp)(ColorStyleBar);