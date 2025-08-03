import React, { useState } from 'react';
import useAuthorization from './hooks/useAuthorization';
import Layout from '../../Layout';
import Loader from '../../components/loader';

import './styles/index.scss';

const componentStyleName = 'page-authorization';

const AuthorizationPage = () => {
    const [ loginValue, setLoginValue ] = useState<string>('');
    const [ passValue, setPassValue ] = useState<string>('');

    const {
        isAuth,      // User authorization flag
        userData,    // User data
        formError,   // Errors in filling in authorization form fields
        fetchError,  // Errors in network requests, obtaining authorization and user data
        isLoad,      // Network request processes flag
        getLogin,    // Authorization
        getLogout    // Deauthorization
    } = useAuthorization(loginValue, passValue);

    const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(event.target.value);
    };

    const onChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassValue(event.target.value);
    };

    if (isLoad) {
        return (
            <Layout>
                <div className={componentStyleName}>
                    <h1>Login</h1>
                    <div className='load-auth'>
                        <Loader />
                    </div>
                </div>
            </Layout>
        );
    }

    return(
        <Layout>
            <div className={componentStyleName}>
                {isAuth && userData !== null
                    ? (
                        <>
                            <h1>
                                {`${userData.firstName} ${userData.lastName}`}
                                <span
                                    onClick={getLogout}
                                >
                                    Logout
                                </span>
                            </h1>
                            <div className='user-unfo'>
                                <img
                                    src={userData.image}
                                    alt={`foto ${userData.firstName} ${userData.lastName}`}
                                />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industrys standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem
                                    Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>Login</h1>
                            <div className='form'>
                                {fetchError !== null && (
                                    <div className='fetch-error'>
                                        {fetchError}
                                    </div>
                                )}
                                {formError !== null && (
                                    <div className='error'>
                                        {formError}
                                    </div>
                                )}
                                <input
                                    type='text'
                                    value={loginValue}
                                    onChange={onChangeLogin}
                                />
                                <input
                                    type='password'
                                    value={passValue}
                                    onChange={onChangePass}
                                />
                                <button onClick={getLogin} >
                                    Login
                                </button>
                            </div>
                        </>
                    )}
            </div>
        </Layout>
    );
};

export default AuthorizationPage;
