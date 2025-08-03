import React, { FunctionComponent } from 'react';
import Icon, { EIconType } from '../../icon';

const Contacts: FunctionComponent = () => {
    return (
        <div className='contacts'>
            <Icon type={EIconType.Phone} />
            <span>
                +021-95-51-84
            </span>
            <Icon type={EIconType.Email} />
            <span>
                shop@abelohost.com
            </span>
            <Icon type={EIconType.Address} />
            <span>
                1734 Stonecoal Road
            </span>
        </div>
    )
};

export default Contacts;