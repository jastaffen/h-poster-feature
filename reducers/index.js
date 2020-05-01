import { combineReducers } from 'redux';

import auth from './auth';
import background from './background';

export default combineReducers({
    auth,
    background
})