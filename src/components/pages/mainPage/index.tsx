import React from 'react';
import useAuthStore from '../../../store/authStore';
import useProductList from './hooks/useProductList';
import Layout from '../../Layout';
import Loader from '../../components/loader';
import ProductList from './components/ProductList';

import './styles/index.scss';

const componentStyleName = 'page-main';

const MainPage = () => {
    let {
        productList,
        isProductListLoad,
        fetchProductListError,
        getProductsData,
    } = useProductList();

    let {data: isAuth} = useAuthStore();

    const onRetry = () => {
        getProductsData(12, 0);
    };

    if (isProductListLoad) {
        return (
            <Layout>
                <div className={componentStyleName}>
                    <h1>Latest Products</h1>
                    <div className='parent-load'>
                        <Loader />
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className={componentStyleName}>
                <h1>Latest Products</h1>
                {fetchProductListError !== null
                    ? (
                        <div className='fetch-arror'>
                            <p>{fetchProductListError}</p>
                            <button onClick={onRetry}> Repeat request!</button>
                        </div>
                    ) : <ProductList
                        productList={productList}
                        isAuth={isAuth}
                    />}
            </div>
        </Layout>
    );
}

export default MainPage;
