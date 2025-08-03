import React, { FunctionComponent } from 'react';
import { ILoginProps } from '../interfaces'
import { NavLink } from 'react-router';
import Icon, { EIconType } from '../../icon';

const Login: FunctionComponent<ILoginProps> = (props) => {
    return (
        <div className='login'>
            {props.isAuth && props.userData
                ? (
                    <>
                        <NavLink to='/authorization'>
                            {`${props.userData.firstName} ${props.userData.lastName}`}
                        </NavLink>
                        <div
                            className='wrapp-icon-logout'
                        >
                            <Icon type={EIconType.User} />
                        </div>
                        <span
                            onClick={props.logOut}
                        >
                            Logout
                        </span>
                    </>
                ) : (
                    <>
                        <div
                            className='wrapp-icon-login'
                        >
                            <Icon type={EIconType.User} />
                        </div>
                        <NavLink to='/authorization'>
                            Login
                        </NavLink>
                    </>
                )}
        </div>
    )
};

export default Login;
