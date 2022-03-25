import * as types from '../constants/actionTypes.js';

export const setPostsActionCreator = postsArray => ({
    type: types.SET_POSTS,
    payload: postsArray
});

export const setPostActionCreator = post => ({
    type: types.SET_POST,
    payload: post
});

export const loginStartActionCreator = () => ({
    type: types.LOGIN_START
});

export const loginSuccessActionCreator = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});

export const loginFailureActionCreator = () => ({
    type: types.LOGIN_FAILURE
});

export const logoutActionCreator = () => ({
    type: types.LOGOUT
});

export const updateUserActionCreator = (username, email, profilePicture) => ({
    type: types.UPDATE_USER,
    payload: {
        username,
        email,
        profilePicture
    }
})