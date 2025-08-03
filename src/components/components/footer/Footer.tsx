import React, { FunctionComponent } from 'react';
import useUserStore from '../../../store/userStore';
import useAuthStore from '../../../store/authStore';
import './styles/index.scss';

const componentStyleName = 'component-app-footer';

const Footer: FunctionComponent = () => {
    const { data: isAuth } = useAuthStore();
    const { data: userData } = useUserStore();

    return (
        <div className={`${componentStyleName}`}>
            <p>
                ©Abelohost Shop. Copyright
            </p>
            <p className='razdel'> | </p>
            <p>
                2025 {isAuth && userData && (
                    `Logged as ${userData.firstName} ${userData.lastName}`)}
            </p>
        </div>
    );
};

export default Footer;
