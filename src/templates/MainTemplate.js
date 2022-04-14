import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const MainTemplate = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <div>
            <Navigation />
          </div>
          <div>
            { children }
          </div>
          <div>
            <Footer />
          </div>
        </Wrapper>
    </ThemeProvider>
  )
}

export default MainTemplate