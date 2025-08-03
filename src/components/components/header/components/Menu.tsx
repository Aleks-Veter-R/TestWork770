import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router';
import { navigationRouts } from '../../../../routes/routes';

const Menu: FunctionComponent = () => {
    const menuData = navigationRouts.slice(0, 7);

    return (
        <div className='component-app-header-menu'>
            <div className='items-menu'>
                {menuData.map((item) => {
                    return (
                        <NavLink
                            key={`key-${item.id}`}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
};

export default Menu;
