import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './components/auth/SignIn';
import LandingPage from './components/home/LandingPage';

const Stack = createStackNavigator();
const headerOptions = { headerShown: false };

const MainAppStack = ({ isLoggedIn }) => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? 
          <>
            <Stack.Screen name="Home" component={LandingPage} 
              options={ headerOptions }
            />
          </>
          :
          <>
            <Stack.Screen name="SignIn" component={SignIn}
              options={ headerOptions }
            />
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const msp = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(msp)(MainAppStack);