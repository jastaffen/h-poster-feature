import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CanvasForm from './CanvasForm';
import Canvas from './Canvas';

const Stack = createStackNavigator();

const CanvasStack = () => (
    <Stack.Navigator headerMode='none' >
        <Stack.Screen  name="CanvasForm" component={CanvasForm} />
        <Stack.Screen name="Canvas" component={Canvas} />
    </Stack.Navigator>
)

export default CanvasStack;