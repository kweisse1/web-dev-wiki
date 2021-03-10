
import React from 'react';
import { StyleSheet} from 'react-native';
import {ReactPage, ReactNativePage, SassPage, BootstrapPage, HomePage, InfoDisplay} from "./pages"
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
      HomePage: { screen: HomePage },
      ReactPage: { screen: ReactPage}, 
      ReactNativePage: {screen: ReactNativePage},
      BootstrapPage: {screen: BootstrapPage}, 
      SassPage: {screen: SassPage}, 
      InfoDisplayPage: {screen: InfoDisplay}
  }, 
  {
      initialRouteName: 'HomePage',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const AppNavigator = createAppContainer(MainNavigator);

//main Component handles navigation between screens.
function MainComponent() {
  return (
        <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainComponent