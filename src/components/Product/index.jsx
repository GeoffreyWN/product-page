import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './Details'
import ProductData from '../../utils/ProductData'


const Index = () => {
    const [product, setProduct] = useState(ProductData)
    
    return (
        <ProductContainer>
            <Details
                title={product.title}
                description={product.description}
                colorOptions={product.colorOptions}
                featureList={product.featureList}  />
        </ProductContainer>
    )
}

export default Index

const ProductContainer = styled.div`
    display: flex;
    width: 85%;
    margin:10% auto;
`