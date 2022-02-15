import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ProjectList />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
