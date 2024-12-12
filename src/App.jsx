import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import colors from './styles/colors';
import SalesPage from './pages/SalesPage';

const theme = {
  colors: colors,
  fonts: {
    primary: 'Inter, sans-serif',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  transitions: {
    default: '0.3s ease',
    smooth: '0.5s ease-in-out',
    slow: '0.8s ease-in-out',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SalesPage />
    </ThemeProvider>
  );
}

export default App; 