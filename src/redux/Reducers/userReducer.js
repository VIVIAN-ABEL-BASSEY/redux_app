import {UPDATE_USER} from "../Constants";

const initialState = {
    user:{
        first_name: 'Dele',
        last_name: 'Taiwo',
    },
};
const userReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case UPDATE_USER:
            return { 
                ...state, 
                user: {
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                }, 
            };
        default:
            return state;
    }
};

export default userReducer;