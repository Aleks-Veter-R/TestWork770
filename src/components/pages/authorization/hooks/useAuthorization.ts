import React, { useState, useEffect } from 'react';
import useAuthStore from '../../../../store/authStore';
import useUserStore from '../../../../store/userStore';
import AuthService from '../../../../api/api.auth';
import { useNavigate } from 'react-router-dom';

const errorEmptyFild = 'To authorize, you must fill in all fields of the form (min 3 characters)';
const errorFetchAuth = 'Authorization error, please try again or log in later';
const errorFetchUserData = 'Error retrieving user data, please try again or sign in later';

const useAuthorization = (login: string, pass: string) => {
    const [formError, setFormError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Auth data
    const {
        data: isAuth,
        isLoad: isAuthLoad,
        error: fetchIsAuthError,
        isNeedRedirect,
        setIsNeedRedirect: setIsNeedRedirect,
        setData: setIsAuth,
        setIsLoad: setIsAuthInLoad,
        setError: setAauthError,
        resetData: resetAuthData,
    } = useAuthStore();

    // User data
    const {
        data: userData,
        isLoad: isUserDataLoad,
        error: fetchUserDataError,
        setData: setUserData,
        setIsLoad: setIsUserDataLoad,
        setError: setUserDataError,
        resetData: resetUserData,
    } = useUserStore();

    useEffect(() => {
        if (isAuth && userData !== null && isNeedRedirect) {
            // Redirect after auth
            setIsNeedRedirect(false);
            navigate('/');
        }
    }, [isAuth, userData, isNeedRedirect]);

    const getAuth = async function(email: string, password: string) {
        setIsAuthInLoad(true);
        setIsUserDataLoad(true);

        setAauthError(null);
        setUserDataError(null);
        
        try {
            const responseAuth = await AuthService.login(email, password);

            localStorage.setItem('token', responseAuth.data.accessToken);

            const responseUserData = await AuthService.getUserData();

            setIsAuth(true);
            setUserData({
                id: responseUserData.data.id,
                firstName: responseUserData.data.firstName,
                lastName: responseUserData.data.lastName,
                maidenName: responseUserData.data.maidenName,
                age: responseUserData.data.age,
                gender: responseUserData.data.gender,
                email: responseUserData.data.email,
                phone: responseUserData.data.phone,
                birthDate: responseUserData.data.birthDate,
                image: responseUserData.data.image,
            });

            setIsNeedRedirect(true);
        } catch (error) {
            // FIXME This code needs some work
            // It is necessary to distinguish between authorization errors
                // and errors in obtaining user data
            if (error.config.url === 'auth/login') {
                setAauthError(errorFetchAuth);
                setUserDataError(null);
            } else {
                setAauthError(null);
                setUserDataError(errorFetchUserData);
            }

            localStorage.removeItem('token');

            setIsAuth(false);
            setUserData(null);
        } finally {
            setIsAuthInLoad(false);
            setIsUserDataLoad(false);
        } 
    };

    const getLogout = () => {
        localStorage.removeItem('token');
        resetAuthData();
        resetUserData();
    };

    const getFetchError = (
        authError: string | null,
        userDataError: string | null
    ): string | null => {
        if (authError === null && userDataError === null) return null;

        if (authError !== null) return errorFetchAuth;
        if (userDataError !== null) return errorFetchUserData;
    }

    const getLogin = () => {
        if (pass.length < 3 || login.length < 3) {
            setFormError(errorEmptyFild);
        } else {
            setFormError(null);
            getAuth(login, pass);
        }
    };

    return({
        isAuth,
        userData,
        formError,
        fetchError: getFetchError(fetchIsAuthError, fetchUserDataError),
        isLoad: isAuthLoad || isUserDataLoad,
        getLogin,
        getLogout,
    });
};

export default useAuthorization;
