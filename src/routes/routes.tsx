import React, { Routes, Route } from 'react-router';
import { Main } from '../components/Main';
import { Authorization } from '../components/Authorization';

export const navigationRouts = [
    {
        id: '1',
        path: '/',
        element: <Main />,
        name: 'Home',
        titlePage: 'Latest Products',
    },
    {
        id: '2',
        path: '/',
        element: <Main />,
        name: 'Hot deals',
        titlePage: 'Hot deals',
    },
    {
        id: '3',
        path: '/',
        element: <Main />,
        name: 'Categories',
        titlePage: 'Categories',
    },
    {
        id: '4',
        path: '/',
        element: <Main />,
        name: 'Laptops',
        titlePage: 'Laptops',
    },
    {
        id: '5',
        path: '/',
        element: <Main />,
        name: 'Smartphones',
        titlePage: 'Smartphones',
    },
    {
        id: '6',
        path: '/',
        element: <Main />,
        name: 'Cameras',
        titlePage: 'Cameras',
    },
    {
        id: '7',
        path: '/',
        element: <Main />,
        name: 'Accessories',
        titlePage: 'Accessories',
    },
    {
        id: '8',
        path: '/authorization',
        element: <Authorization />,
        name: 'Login',
        titlePage: 'Login',
    },
];

const AppRoutes = () => {
    return (
        <Routes>
            {navigationRouts.map((item) => {
                return (
                    <Route
                        key={item.id}
                        path={item.path}
                        element={item.element}
                    />
                )
            })}
        </Routes>
    )
};

export default AppRoutes;
