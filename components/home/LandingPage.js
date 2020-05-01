import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Canvas from '../canvas/Canvas';
import ViewPosters from '../posters/ViewPosters';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    inactiveBackgroundColor: 'white',
    activeBackgroundColor: 'black',
    tabStyle: {
        flex: 1,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: 'white'
    },
    labelStyle: {
        fontSize: 15,
        fontFamily: 'Helvetica'
    },
    activeTintColor: 'white'
 }

const LandingPage = () => {
    return(
        <Tab.Navigator tabBarOptions={ tabBarOptions } >
            <Tab.Screen name="CREATE" component={ Canvas } />
            <Tab.Screen name="VIEW" component={ ViewPosters } />
        </Tab.Navigator>
    )
}

export default LandingPage;