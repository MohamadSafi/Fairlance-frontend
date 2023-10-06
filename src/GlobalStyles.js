import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

body {
    background-color: #F2FAFA;
    scrollbar-width: none;
}

body::-webkit-scrollbar {
    display: none;
}

.seperate {
    height: 1px;
    width: 85%;
    background-color: #cfcfcf;
    margin: 0 auto;
}
`;
