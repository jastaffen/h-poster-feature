import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import MainAppStack from './MainAppStack';


const App = () => {
  
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <Provider store={ store }>
      <MainAppStack />
    </Provider>
  );
}



export default App;


