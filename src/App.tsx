import { ThemeProvider } from 'styled-components';

import StartPage from '~pages/Start';
import { InitStyled } from '~styles/init';
import { defaultTheme } from '~styles/theme';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InitStyled />

      <StartPage />
    </ThemeProvider>
  );
}

export default App;
