
import React from 'react';
import {HomePage, InfoDisplay} from "./pages"
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import styles from "../shared/styles"

const MainNavigator = createStackNavigator(
  {
      HomePage: { screen: HomePage },
      InfoDisplayPage: {screen: InfoDisplay}
  }, 
  {
      initialRouteName: 'HomePage',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: styles.nav.backgroundColor
          },
          headerTintColor: styles.nav.color,
          headerTitleStyle: {
              color: styles.nav.color
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

export default MainComponent