import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.family};
    }
    
    body {
        font-size: ${({ theme }) => theme.font.size};
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }
`;