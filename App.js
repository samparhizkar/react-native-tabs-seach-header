import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Playground from './Playground'
export default function App() {
  return (
      <Playground/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
