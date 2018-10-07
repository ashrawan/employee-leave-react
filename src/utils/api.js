import axios from 'axios';
import {SERVER_AUTHENTICATED_URL, SERVER_URL} from './constants';

export const API = axios.create({
    baseURL: SERVER_AUTHENTICATED_URL,
});

API.defaults.headers.common['Authorization'] = "Bearer 05a76d89-32a9-4ddd-8c3d-4fa37f57d6aa";

export const NORMAL_API = axios.create({
    baseURL:  SERVER_URL
});