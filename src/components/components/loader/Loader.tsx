import React, { FunctionComponent } from 'react';
import './styles/index.scss';

const componentStyleName = 'component-app-loader';

const Loader: FunctionComponent = () => {
    return (
        <div className={`${componentStyleName}`}>
            <div className='loader'/>
        </div>
    );
};

export default Loader;
