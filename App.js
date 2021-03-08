import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {MainComponent} from "./components/"


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <MainComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

