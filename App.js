import React from 'react';
import {MainComponent} from "./components/"
import {Provider} from "react-redux"
import {store} from "./redux/configureStore"

console.disableYellowBox = true;
export default function App() {
  return (
      <Provider store={store}>
      <MainComponent />
      </Provider>
  );
}



