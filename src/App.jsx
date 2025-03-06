import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import MyTheme from './theme/MyTheme';
import MainRouter from './router/MainRouter';

function App() {

  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      <MainRouter />
    </ThemeProvider>
  )
}

export default App
