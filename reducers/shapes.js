import { ADD_SHAPE } from '../actions/types';


const initialState = {
    shapes: [],
    selectedShape: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;
    switch(type) {
        case ADD_SHAPE: 
            
            // UUIDGenerator.getRandomUUID(async (uuid) => {
            //     await console.log(uuid);
            // });

            return {
                ...state,
                shapes: [ ...state.shapes, {...payload, id: Math.random() * 1000 } ]
            }
        
        default:
            return state
    }
}