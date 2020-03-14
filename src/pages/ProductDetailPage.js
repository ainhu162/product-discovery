import React from 'react'
import {useParams } from 'react-router-dom'
import { Layout } from '../components/Layout';
const ProductDetailPage = () => {
    let { id } = useParams();
    return (
        <Layout title={id}>
            Product Detail {id}
        </Layout>
    )
}

export default ProductDetailPage