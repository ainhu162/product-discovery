import React,{lazy} from 'react';
const ProductListPage = lazy(() => import('./pages/ProductListPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const routes = [
    {
        path : '/',
        exact: true,
        main: () => <ProductListPage/>
    },
    {
        path:'/product/:id',
        exact: false,
        main: () => <ProductDetailPage/>
    }
];
export default routes;