import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/Navigation/Navigation';

const Wrapper = styled.div``;

const MainTemplate = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <GlobalStyle />
            <Navigation />
            { children }
        </Wrapper>
    </ThemeProvider>
  )
}

export default MainTemplate