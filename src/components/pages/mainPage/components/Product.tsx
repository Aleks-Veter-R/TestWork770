import React, { useState, FunctionComponent } from 'react';
import { IProductListItemProps } from '../interfaces';
import Icon, { EIconType } from '../../../components/icon';
import Loader from '../../../components/loader';

const Product: FunctionComponent<IProductListItemProps> = ({product, isAuth}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const onAddToCard = () => {
        console.log('Add to card:', product);
    };

    return (
        <div className='product-list-item' >
            {!imageLoaded && (
                <div className='wrapp-loader'>
                    <Loader />
                </div>
            )}
            <img
                src={product.images[0]}
                alt={product.title}
                onLoad={handleImageLoad}
            />
            {imageLoaded && (<>
                {isAuth && (
                    <div
                        className='add-to-cart'
                        onClick={onAddToCard}
                    >
                        <Icon type={EIconType.Basket} />Add to cart
                    </div>
                )}
                <div className='title'>{product.title}</div>
                <div className='category'>{product.category}</div>
                <div className='price'>${product.price}</div>
            </>)}
        </div>
    );
}

export default Product;
