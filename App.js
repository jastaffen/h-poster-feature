import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import MainAppStack from './MainAppStack';


const App = () => {
  return (
    <Provider store={ store }>
      <MainAppStack />
    </Provider>
  );
}



export default App;


