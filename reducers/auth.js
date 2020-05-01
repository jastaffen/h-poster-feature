import { SIGN_IN } from '../actions/types';

const initialState = {
    isLoggedIn: false
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type) {

        case SIGN_IN:
            return {
                isLoggedIn: true
            }
        default: 
            return state

    }
}