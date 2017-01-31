import { EMAIL_C, PASS_C, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from '../actions/types';

const IN_ST = { 
    email: '',
    password: '',
    error: '',
    loading: false
}; //sixth

export default (state = IN_ST, action) => {
    switch (action.type) {
        case EMAIL_C:
            return { ...state, email: action.payload };   //seventh
        case PASS_C:
            return { ...state, password: action.payload };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false };
        case LOGIN_FAIL:
            return { ...state, error: 'Auth failed', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;

    }
};

