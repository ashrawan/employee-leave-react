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
    API.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
   
    return (dispatch) => {
        return API.get("employees/me").then(
            (response) => {
                console.log("response user profile ", response);
                dispatch(user(response.data));
                dispatch(redirectTo("/home"));
                return response;
            }).catch(
                (error) => {
                    console.log("response user profile ", error);
                    localStorage.removeItem("token");
                    dispatch(redirectTo("/"));
                });
    };
};
