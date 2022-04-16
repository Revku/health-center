import React from 'react'
import styled from 'styled-components'

import Box from 'components/Box/Box'

const Title = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: ${({theme}) => theme.font.weight.bold};
`;

const Paragraph = styled.p`
    font-size: 15px;
    margin-top: 20px;
    text-align: center;
`;

const Result = ({title, paragraph, color}) => {
  return (
    <>
        <Box>
            <Title style={{ color: color }}>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
        </Box>
    </>
  )
}

export default Result