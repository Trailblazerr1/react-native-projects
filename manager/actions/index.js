import firebase from 'firebase';

import {
 EMAIL_C,
  PASS_C,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER
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

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: LOGIN_SUCCESS, payload: user });
        })
        .catch(() => {
            firebase.auth.createUserWithEmailAndPassword(email, password)
                .then(user => {
                    dispatch({ type: LOGIN_SUCCESS, payload: user });
                })
                .catch(() => loginUserFail(dispatch));
        });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
};
