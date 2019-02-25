import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';


export const sessionReducer = (oldState={id: null}, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            let newState = merge({}, oldState);
            return merge({}, newState, {id: null});
        default:
            return oldState;
    }
}