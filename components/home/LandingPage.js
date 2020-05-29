import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CanvasStack from '../canvas/CanvasStack';
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

const getIsTabBarVisible = (route) => {
    const routeName = route.state ? 
        route.state.routes[1] : null;
        
    if (routeName) {
        return routeName.name === 'Canvas' ? false : true
    }
    return true;
}

const LandingPage = () => {
    return(
        <Tab.Navigator tabBarOptions={ tabBarOptions } 
        screenOptions={({route}) => ({
            tabBarVisible: getIsTabBarVisible(route)
          })} >
            <Tab.Screen name="CREATE" component={ CanvasStack } />
            <Tab.Screen name="VIEW" component={ ViewPosters } />
        </Tab.Navigator>
    )
}

export default LandingPage;