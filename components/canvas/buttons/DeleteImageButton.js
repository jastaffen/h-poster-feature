import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { DELETE_BACKGROUND_IMAGE } from '../../../actions/types';

import DeleteImage from '../../../images/delete-image.png';

const DeleteImageButton = ({ removeBackgroundImage }) => (
    <TouchableOpacity style={{ marginRight: 10 }} 
        onPress={removeBackgroundImage} >
        <Image source={DeleteImage} style={{ width: 20, height: 20 }} />
    </TouchableOpacity>
)

const mdp = dispatch => ({
    removeBackgroundImage: () => dispatch({
        type: DELETE_BACKGROUND_IMAGE
    })
});

export default connect( null, mdp )(DeleteImageButton);