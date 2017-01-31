import { EMAIL_C, PASS_C } from '../actions/types';

const IN_ST = { 
    email: '',
    password: ''
}; //sixth

export default (state = IN_ST, action) => {
    switch (action.type) {
        case EMAIL_C:
            return { ...state, email: action.payload };   //seventh
        case PASS_C:
            return { ...state, password: action.payload };
        default:
            return state;

    }
};

