import { NORMAL_API, API } from '../../utils/api';
import { startFetchuser, user } from './user';

//LOGIN
export const token = (token) => ({
    type: 'LOGIN',
    token
});

//ERROR
export const errorMessage = (error) => ({
    type: 'ERROR',
    error
});

//IS_LOADING
export const isLoading = (isloading) => ({
    type: 'IS_LOADING',
    isloading
});

//REDIRECT_TO
export const redirectTo = (redirect) => ({
    type: 'REDIRECT_TO',
    redirect
});

//EMPTY
export const emptyToken = () => ({
    type: 'EMPTY'
});


export const loginRequest = (username, password) => {

    console.log("username " + username + " password " + password);

    var authbtoa = btoa("demo-client:demo-secret");
    var data = "grant_type=password&username="+username+"&password="+password+"";
    const config = {
        headers: {
            "Authorization": 'Basic ' + authbtoa,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return (dispatch) => {
        NORMAL_API.post('oauth/token', data, config).then((response) => {

            console.log("local storage ", response.data.access_token);

            var tokenData = response.data;
            localStorage.setItem("token", tokenData.access_token);

            // API.defaults.headers.common['Authorization'] = tokenData.token_type+ " " + tokenData.access_token;

            dispatch(token(tokenData));
            dispatch(startFetchuser());
            console.log("token actions response ", response);
        }).catch((error) => {
            console.log("error from login actions ", error);
        });
    };

};


export const checkServerStatus = () => {
    return (dispatch) => {
        return NORMAL_API.get('user/server')
            .then(function (response) {
                // console.log("res ", response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};