import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.p`
  font-size: 14px;
  margin-top: 30px;
  max-width: 600px;
`;

const Description = ({children}) => {
  return (
    <StyledDescription>{children}</StyledDescription>
  )
}

export default Description