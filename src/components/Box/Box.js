import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 10px 0;
    width: 95%;
    padding: 50px 30px;
    max-width: 800px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
`;

const Box = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Box