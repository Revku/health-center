import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 30px 0;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  letter-spacing: 0.17em;
  background: linear-gradient(90deg, #9916FF 0%, #424FC2 104.62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
`;

const Result = ({children}) => {
  return (
    <Wrapper>
      <Title>TWOJE WYNIKI</Title>
      {children}
    </Wrapper>
  )
}

export default Result