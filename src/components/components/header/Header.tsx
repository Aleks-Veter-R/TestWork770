import React, { FunctionComponent } from 'react';
import useAuthorization from '../../pages/authorization/hooks/useAuthorization';
import useUserStore from '../../../store/userStore';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Menu from './components/Menu';
import Icon, { EIconType } from '../icon';
import './styles/index.scss';

const componentStyleName = 'component-app-header';

const Header: FunctionComponent = () => {
    const { isAuth, getLogout } = useAuthorization('', '');
    const { data: userData } = useUserStore();

    const onLogout = () => {
        getLogout();
    }

    return (
        <div className={`${componentStyleName}`} >
            <div className={`${componentStyleName}-info`} >
                <div>
                    <Contacts />
                    <Login
                        isAuth={isAuth}
                        userData={userData}
                        logOut={onLogout}
                    />
                </div>
            </div>
            <div className={`${componentStyleName}-logo`} >
                <div>
                    <p>Abelohost Shop</p> <Icon type={EIconType.Logo} />
                </div>
            </div>
            <Menu />
        </div>
    )
};

export default Header;
