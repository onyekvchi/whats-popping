import { SET_ACTIVE_DATE } from '../actions/actionCreator';

function activeDate(state = null, action) {
    switch(action.type){
        case SET_ACTIVE_DATE:
            return action.date;
        default:
            return state;
    }
};

export default activeDate;