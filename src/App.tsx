import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme.styles";
import { GlobalStyle } from "./styles/global.styles";

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
