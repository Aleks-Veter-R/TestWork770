import React, { useEffect } from 'react';
import useProductListStore from '../../../../store/productListStore';
import ProductsService from '../../../../api/api.products';

const errorFetchAuth = 'Error retrieving product list data, please try again or sign in later';

const useProductList = () => {
    //  Product list data
    const {
        data: productList,
        isLoad: isProductListLoad,
        error: fetchProductListError,
        setData,
        setIsLoad,
        setError,
        resetData,
    } = useProductListStore();

    useEffect(() => {
        getProductsData(12, 0);
    }, []);

    const getProductsData = async function(limit:number, skip: number) {
        resetData();
        setIsLoad(true);

        try {
            const responseProductsData = await ProductsService.getProductsData(limit, skip);

            const productsData = responseProductsData.data.products.map(
                (item) => {
                    return {...item, images: [...item.images]};
                }
            );

            setData(productsData);
        } catch (error) {
            setError(errorFetchAuth);
            console.log(error);
        } finally {
            setIsLoad(false);
        } 
    }

    return ({
        productList,
        isProductListLoad,
        fetchProductListError,
        getProductsData,
    });
}

export default useProductList;
