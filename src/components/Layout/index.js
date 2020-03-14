import React from 'react'
import { Header } from '../Header'
import ProductListPage from '../../pages/ProductListPage'

export const Layout = (props) => {
    return (
        <div>
            <Header title={props.title} />
            {props.children}
        </div>
    )
}
