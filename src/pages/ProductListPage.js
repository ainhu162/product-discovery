import React from 'react'
import { ProductList } from '../components/ProductList'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'

const ProductListPage = () => {
    return (
        <Layout header={<Header/>}>
            <ProductList/>
        </Layout>
    )
}
export default ProductListPage