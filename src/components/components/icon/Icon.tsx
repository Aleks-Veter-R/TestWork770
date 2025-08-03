import React, { FunctionComponent, ReactElement } from 'react';
import { EIconType, IPropsIcon } from './interfaces';
import Address from './images/Address';
import Phone from './images/Phone';
import Email from './images/Email';
import User from './images/User';
import Basket from './images/Basket';
import Logo from './images/Logo';
import './styles/index.scss';

const componentStyleName = 'component-icon-svg';

const Icon: FunctionComponent<IPropsIcon> = (props) => {
    let icon: ReactElement = null;
    
    switch (props.type) {
        case EIconType.Address:
            icon = <Address />;
            break;
        case EIconType.Phone:
            icon = <Phone />;
            break;
        case EIconType.Email:
            icon = <Email />;
            break;
        case EIconType.User:
            icon = <User />;
            break;
        case EIconType.Basket:
            icon = <Basket />;
            break;
        case EIconType.Logo:
            icon = <Logo />;
            break;
        default:
            icon = null;
    };
    
    return (
        <div className={`${componentStyleName}-${props.type} icon`}>
            {icon}
        </div>
    );
};

export default Icon;
