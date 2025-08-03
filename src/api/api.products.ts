import { instance, getUrl, EUrlType } from './api.config';
import { IProductData } from '../components/pages/mainPage/interfaces';

interface IProductsServiceResponse {
    products: IProductData[];
    total: number;
    skip: number;
    limit: number;
}

interface IProductsService {
    getProductsData(limit:number, skip: number): Axios.IPromise<Axios.AxiosXHR<IProductsServiceResponse>>;
}

const ProductsService: IProductsService = {
    getProductsData(limit: number, skip: number) {
        const url = `${getUrl(EUrlType.ProductList)}?limit=${limit}&skip=${skip}&select=title,category,price,images`
        return instance.get(url);
        // return instance.get(getUrl(EUrlType.Error));
    }
}

export default ProductsService;
