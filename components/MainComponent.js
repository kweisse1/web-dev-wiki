
import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import {ReactPage, ReactNativePage, SassPage, BootstrapPage, HomePage} from "./pages"




//main Component handles navigaton between screens.
 function MainComponent() {
  return (
    <ScrollView style={styles.container}>
      <ReactPage />
      <BootstrapPage />
      <HomePage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainComponent