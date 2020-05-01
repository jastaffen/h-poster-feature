import React from 'react';

import ClearButton from './buttons/ClearButton';
import ColorButton from './buttons/ColorButton';
import CameraButton from './buttons/CameraButton';
import ShapesButton from './buttons/ShapeButton';

export default ButtonStyleContainer = ({ handleButtonClicked }) => (
    <>
        <ShapesButton handleButtonClicked={handleButtonClicked} />
        <CameraButton />
        <ColorButton handleButtonClicked={handleButtonClicked} />
        <ClearButton />
    </>
)