import 'react-native-gesture-handler';

import { ThemeProvider } from '@shopify/restyle';
import { theme } from 'theme';

import MainScreen from 'screens/MainScreen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <RootStack /> */}
      <MainScreen />
    </ThemeProvider>
  );
}
