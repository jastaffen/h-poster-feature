import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CanvasForm from '../canvas/CanvasForm';
import ViewPosters from '../posters/ViewPosters';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    inactiveBackgroundColor: 'white',
    activeBackgroundColor: 'black',
    tabStyle: {
        flex: 1,
        justifyContent: 'center',
        borderTopWidth: 0.2,
        borderTopColor: 'white'
    },
    labelStyle: {
        fontSize: 15,
        fontFamily: 'Helvetica'
    },
    activeTintColor: 'white'
 }

const CanvasTabs = () => {
    return(
        <Tab.Navigator tabBarOptions={ tabBarOptions } >
            <Tab.Screen name="CREATE" component={ CanvasForm } />
            <Tab.Screen name="VIEW" component={ ViewPosters } />
        </Tab.Navigator>
    )
}

export default CanvasTabs;