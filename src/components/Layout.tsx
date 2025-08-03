import React, { PropsWithChildren } from 'react';
import Header from './components/header';
import Footer from './components/footer';

const componentStyleName = 'basic-layout';

const BasicLayout = (props: PropsWithChildren) => {
    return (
        <div className={`root-parent ${componentStyleName}`}>
            <div className='root-header'>
                <Header />
            </div>
            <div className='root-body'>
                {props.children}
            </div>
            <div className='root-footer'>
                <Footer /> 
            </div>
        </div>
    );
}

export default BasicLayout;
