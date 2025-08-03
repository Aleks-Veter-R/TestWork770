import React, { FunctionComponent } from 'react';
import { IProductData, IProductListProps } from '../interfaces';
import Product from './Product';

const ProductList: FunctionComponent<IProductListProps> = ({productList, isAuth}) => {
    if (productList === null || productList.length === 0) {
        return (
            <div className='empty-product-list'>
                Sorry... Product list is empty!
            </div>
        );
    }

    return (
        <div className='product-list'>
            {productList.map((item: IProductData) => {
                return (
                    <Product
                        key={`key-${item.id}`}
                        product={{...item}}
                        isAuth={isAuth}
                    />
                )
            })}
        </div>
    );
}

export default ProductList;
