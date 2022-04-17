import React from 'react'
import styled from 'styled-components'

const StyledHighlight = styled.span`
    font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const Highlight = ({children}) => {
  return (
    <StyledHighlight>{children}</StyledHighlight>
  )
}

export default Highlight