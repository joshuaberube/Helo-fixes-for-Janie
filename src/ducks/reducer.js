// import axios from 'axios'
const initialState = {
    username: '',
    profilePic: '',
    userId: 0,
    // isLoggedIn: false
}

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = 'LOGOUT_USER';
// const GET_USER = "GET_USER";


export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user 
    }
}

export function logoutUser() {
    return {
      type: LOGOUT_USER,
      payload: initialState
    }
}

// export function getUser(){
//     const user = axios.get('/api/user')
//     .then(res => res.data) 
//     return {
//         type: GET_USER,
//         payload: user 
//     }
// }

export default function reducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type){
        case LOGIN_USER:
            return {...state, username: payload, profilePic: payload, userId: payload}
        case LOGOUT_USER:
            return {...state, ...action.payload}; 
        // case GET_USER + '_PENDING':
        //     return state
        // case GET_USER + '_FULFILLED': 
        //     return {...state, user: action.payload, isLoggedIn: true}
        // case GET_USER + '_REJECTED':
        //     return initialState
        default:
            return state;
    }
}