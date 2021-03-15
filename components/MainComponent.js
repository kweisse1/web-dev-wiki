
import React from 'react';
import {HomePage, InfoDisplay} from "./pages"
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
      HomePage: { screen: HomePage },
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

export default MainComponent