import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/routes';
import './styles/App.scss';

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <AppRoutes />  
            </BrowserRouter>
        </StrictMode>
    );
}

export default App;
