import { CHANGE_BACKGROUND_COLOR } from '../actions/types';

const initialState = {
    backgroundColor: 'white',
    backgroundImage: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: payload
            }
            
        default:
            return state;
    }
}