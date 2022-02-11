import React from 'react';
import styled from 'styled-components/native';

const HeaderArea = styled.View`
    height:70px;
    width:100%;
    background-color:#005AA5;
    justify-content:center;
    align-items:center;
    border-bottom-color: #FAE128;
    border-bottom-width: 4px;

`;
const HeaderTitle = styled.Text`
    color:#FFFFFF;
    font-size:24px;
    font-weight:bold;
`;


const Header = ({title}) => {
    return(
        <HeaderArea>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderArea>
    )
}
export default Header;