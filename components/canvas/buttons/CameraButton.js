import React from 'react';
import { TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import Camera from '../../../images/upload-photo.png';

const CameraButton = ({ backgroundImage }) => {

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
              console.log(result.uri)
          }
          console.log(result);
        } catch (err) {
          console.log(err);
        }
    };

    console.log(backgroundImage);

    return(
        <TouchableOpacity style={{marginRight: 10 }} onPress={_pickImage}>
            <Image source={Camera} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    )
}

const msp = state => ({
    backgroundImage: state.background.backgroundImage
})

export default connect(msp)(CameraButton);