import { useQuery } from 'react-query'
import { apiService } from '../service/api';
import { ProductList } from '../types/Product';

async function getProduct(): Promise<ProductList>  {
    const response = await apiService.get(`products`)
    return response.data
}

export function useFetchProducts() {
    return useQuery('fetchProduct', getProduct)
}
