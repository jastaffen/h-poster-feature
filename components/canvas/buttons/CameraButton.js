import React from 'react';
import { TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { SELECT_BACKGROUND_IMAGE } from '../../../actions/types';

import Camera from '../../../images/upload-photo.png';

const CameraButton = ({ setBackgroundImage }) => {

    const getPermissionAsync = async () => {
        if (Platform.os === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Permissions to access camera roll!');
            }
        }
    }

    const _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
              setBackgroundImage(result.uri);
          }
        } catch (err) {
          console.log(err);
        }
    };


    return(
        <TouchableOpacity style={{marginRight: 10 }} onPress={_pickImage}>
            <Image source={Camera} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    )
}

const mdp = dispatch => ({
    setBackgroundImage: (imageUrl) => dispatch({
        type: SELECT_BACKGROUND_IMAGE,
        payload: imageUrl
    })
})

export default connect( null, mdp )(CameraButton);