import * as types from '../constants/actionTypes.js';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    posts: [],
    post: {},
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_POSTS: {
            const newPosts = action.payload;
            return ({
                ...state,
                posts: newPosts
            });
        }
        case types.SET_POST: {
            const post = action.payload;
            return {
                ...state,
                post
            }
        }
        case types.LOGIN_START: {
            return {
                ...state,
                error: false,
                isFetching: true
            }
        }
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: false,
                user: action.payload
            }
        }
        case types.LOGIN_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: true
            }
        }
        case types.LOGOUT: {
            return {
                ...state,
                user: null
            }
        }
        case types.UPDATE_USER: {
            const username = action.payload.username;
            const email = action.payload.email;
            const profilePicture = action.payload.profilePicture;

            return {
                ...state,
                user: {
                    ...state.user,
                    username,
                    email,
                    profilePicture
                }
            }
        }
        default: {
            return state;
        }
    }
};

export default userReducer;