
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import {ReactPage, ReactNativePage, SassPage, BootstrapPage, HomePage} from "./pages"


//main Component handles navigation between screens.
function MainComponent() {
  return (
        <ReactPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainComponent