import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";
import { merge } from 'lodash';

export const sessionErrorsReducer = (oldState={}, action) => {
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return merge({}, oldState, {errors: action.errors})
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return oldState;
    }
}