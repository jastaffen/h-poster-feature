import React from 'react';
import { Image } from 'react-native';

import Logo from '../../images/happenings-logo.png';

const AuthLandingLogo = () => (
    <Image source={Logo} style={{width: 200, height: 200}} />
)

export default AuthLandingLogo;