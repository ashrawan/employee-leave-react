import {API} from '../../utils/api';
import { redirectTo } from './token';

export const user = (user = {}) => ({
    type: 'FETCH_USER',
    user
});

export const clearUser = () => ({
    type: 'CLEAR_USER'
});

export const startFetchuser = () => {
    console.log("local storage token ", localStorage.getItem("token"));
   
    return (dispatch) => {
        return API.get("employees/me").then(
            (response) => {
                console.log("response user profile ", response);
                dispatch(user(response.data));
                dispatch(redirectTo("/home"));

                //console.log("response user data == ",response.data.role , "== ROLE_ADMIN");
                // if (response.data.role == "ROLE_ADMIN") {
                //     dispatch(redirectTo("/adminDash"));
                // } else {
                //     dispatch(redirectTo("/userDash"));
                // }
                return response;
            }).catch(
                (error) => {
                    console.log("response user profile ", error);
                });
    };
};
