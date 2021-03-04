import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ReactPage} from "./components"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReactPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

