import { SET_AUTH_USER } from "../actions/authedUser";

function authedUser(state = null, { type, id }) {
    switch (type) {
        case SET_AUTH_USER:
            return id;
        default:
            return state;
    }
}
export default authedUser;