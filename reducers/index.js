import { combineReducers } from 'redux';

import auth from './auth';
import background from './background';
import shapes from './shapes'

export default combineReducers({
    auth,
    background,
    shapes
})