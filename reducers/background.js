import { CHANGE_BACKGROUND_COLOR, SUBMIT_POSTER_FORM } from '../actions/types';

const initialState = {
    backgroundColor: '#FFFFFF',
    backgroundImage: '',
    title: '',
    author: '',
    timestamp: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SUBMIT_POSTER_FORM:
            const { author, title } = payload;
            return {
                ...state,
                author,
                title
            }
        case CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: payload
            }    
        default:
            return state;
    }
}