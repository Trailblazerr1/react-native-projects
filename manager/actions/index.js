import { EMAIL_C } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_C,
        payload: text
    };
};
