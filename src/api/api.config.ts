import axios from 'axios';
import { BASE_URL_DUMMYJSON, getUrl, EUrlType } from './constants';
import { IAuthServiceRefreshResponse } from './api.auth';

export const instance = axios.create({
    baseURL: BASE_URL_DUMMYJSON,
    withCredentials: false, // Fix Localhost CORS error
    // withCredentials: true,
});

// Create a request interceptor
// Let's add to each request accessToken from localStorage
instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    }
);

instance.interceptors.response.use(
    (config) => {
        return config;
    },

    // Refresh auth token
    async (error) => {
        const originalRequest = {...error.config};
        originalRequest._isRetry = true;

        if (
            error.response.status === 401 && // Is error invalid auth token
            error.config &&
            !error.config._isRetry // Is not retry request
        ) {
            try {
                // Request refresh auth token
                const response: Axios.AxiosXHR<IAuthServiceRefreshResponse> = await instance.get(getUrl(EUrlType.RefreshToken));

                localStorage.setItem('token', response.data.accessToken);
                return instance.request(originalRequest);
            } catch (error) {
                console.log('Auth error: ', error);
            }
        }

        // It isn't auth token error
        throw error;
    }
);

export {
    getUrl,
    EUrlType
};
