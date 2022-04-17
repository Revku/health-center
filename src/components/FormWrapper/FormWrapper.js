import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 50px 0;
`;

const FormWrapper = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default FormWrapper