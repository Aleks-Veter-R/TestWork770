const enum EUrlType {
    Login = 'Login',
    RefreshToken = 'RefreshToken',
    User = 'User',
    ProductList = 'ProductList',
    Error = 'Error',
    Logout = 'Logout',
};

export const BASE_URL_DUMMYJSON = 'https://dummyjson.com/';

export const getUrl = (type: EUrlType): string => {
    switch (type) {
        case 'Login':
            return 'auth/login';
        case 'RefreshToken':
            return 'auth/refresh';
        case 'User':
            return 'auth/me';
        case 'ProductList':
            return 'products';
        case 'Error':
        case 'Logout':  
        default:
            return 'http/404/Bad_request';
    }
};

export { EUrlType };
