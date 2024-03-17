import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}
html *,
::after,
::before {
  box-sizing: inherit;
}
ul{
  list-style: none;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}
`;
