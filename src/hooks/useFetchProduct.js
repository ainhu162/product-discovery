import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchProductRequest } from '../actions/product';
export default function useFetchProduct(pageNumber) {
  const [hasMore, setHasMore] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  useEffect(()=>{
    if(products.totalItems !== products.productList.length){
      setHasMore(true)
    }else {
      setHasMore(false)
    }
  },[products.productList, products.totalItems]);

  useEffect(() => {
    dispatch(actFetchProductRequest(products.query, pageNumber));
  }, [pageNumber]);

  return [hasMore, products.productList]
}
