import { IUserData } from '../../../../store/userStore';

interface ILoginProps {
    isAuth: boolean;
    userData: IUserData | null;
    logOut: () => void;
}

export { ILoginProps };
