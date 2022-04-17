import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${({theme}) => theme.colors.gradient};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    cursor: pointer;
`;

const Button = ({onClick, children}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button