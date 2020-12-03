import React, { useState , Dispatch, SetStateAction } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/header';
import GlobalStyles from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark: light)
  }

  return ( 
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme}/>
      <div style={{ padding: '12px' }}>
        <h1>Alter Theme</h1>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
