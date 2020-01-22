import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';



export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    <Routes />
    </>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
