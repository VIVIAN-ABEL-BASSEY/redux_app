import { INCREASE_COUNTER, DECREASE_COUNTER} from "../Constants";


const initialState = {
    counter: 0,
    name: "Kingsley",
    user: {
        first_name: "",
        last_name: ""
    }
}
function counterReducer( state = initialState, action){
    switch(action.type){
        case INCREASE_COUNTER:
            return{
                ...state, counter: ++state.counter
            }
        case DECREASE_COUNTER:
            return{
                ...state, counter: --state.counter
            }
        // case ADD_POST:
        //     return{
        //         ...state, first_name: state.first_name.payload(data)
        //     }    
        default:
            return state;       
    }
}

export default counterReducer;