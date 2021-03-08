import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {ReactPage, ReactNativePage, SassPage, BootstrapPage} from "./components/pages"


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <ReactPage />
      <ReactNativePage />
      <SassPage />
      <BootstrapPage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

