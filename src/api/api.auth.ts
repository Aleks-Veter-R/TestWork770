import { instance, getUrl, EUrlType } from './api.config';
import { IUserData } from '../store/userStore';

export interface IAuthServiceRefreshResponse {
    accessToken: string;
    refreshToken: string;
}

interface IAuthServiceLoginResponse extends IAuthServiceRefreshResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

interface IAuthServiceUserResponse extends IUserData {
    id: number;
}

interface IAuthService {
    login(
        username: string,
        password: string,
        expiresInMins?: number, // defaults to 60
    ): Axios.IPromise<Axios.AxiosXHR<IAuthServiceLoginResponse>>;

    refresh(): Axios.IPromise<Axios.AxiosXHR<IAuthServiceRefreshResponse>>;

    logout(): Promise<boolean>;

    getUserData(): Axios.IPromise<Axios.AxiosXHR<IAuthServiceUserResponse>>;
}

const AuthService: IAuthService = {
    login(username, password) {
        return instance.post(getUrl(EUrlType.Login), {username, password});
    },
    
    refresh() {
        return instance.get(getUrl(EUrlType.RefreshToken));
    },
    
    logout() {
        // Logout request
        return Promise.resolve(true);

        // Logging out a user from the server
        // return instance.post('auth/logout');
    },

    getUserData() {
        return instance.get(getUrl(EUrlType.User));
        // return instance.get(getUrl(EUrlType.Error));
    }
}

export default AuthService;
