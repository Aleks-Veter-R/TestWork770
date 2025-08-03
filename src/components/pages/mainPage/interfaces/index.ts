interface IProductData {
    id: number;
    category: string;
    images: string[];
    price: number;
    title: string;
}

interface IProductListProps {
    productList: IProductData[] | null;
    isAuth: boolean;
}

interface IProductListItemProps {
    product: IProductData;
    isAuth: boolean;
}

export { IProductData, IProductListProps, IProductListItemProps };
