import { EMAIL_C } from '../actions/types';
const IN_ST = { email: '' };

export default (state = IN_ST, action) => {
    switch (action.type) {
        case EMAIL_C:
            return 
        default:
            return state;

    }
};

