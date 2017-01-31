import {
 EMAIL_C,
  PASS_C
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_C,
        payload: text
    };
};

//plain javascr object
//second

export const passChanged = (text) => {
    return {
        type: PASS_C,
        payload: text
    };
};
