import axios from 'axios';
import {SERVER_AUTHENTICATED_URL, SERVER_URL} from './constants';

export const API = axios.create({
    baseURL: SERVER_AUTHENTICATED_URL,
});

// API.defaults.headers.common['Authorization'] = "Bearer 9609578b-6754-466a-92a5-a4b68481fc18";

export const NORMAL_API = axios.create({
    baseURL:  SERVER_URL
});