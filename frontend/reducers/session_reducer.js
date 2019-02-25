import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';


export const sessionReducer = (oldState={}, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldstate, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            let newState = merge({}, oldState);
            delete newState[session]
            return merge({}, newState, {session: {id: null}});
        default:
            return oldState;
    }
}