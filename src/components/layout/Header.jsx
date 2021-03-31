import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="my-logo"/>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    height: 80px;
    background-color: #23303E;
    display: grid;
    place-items:center;
`

const LogoContainer = styled.img`
    height: 60px;
`
