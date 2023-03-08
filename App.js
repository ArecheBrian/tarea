import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { MyApp } from './src/navigation/Navigation';
import { Store } from './src/Redux/Store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <NativeBaseProvider>
        <MyApp/>
      </NativeBaseProvider>
    </Provider>
  );
}
