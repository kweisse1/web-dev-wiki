import React, {Component} from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"


class ReactNativePage extends Component
{
  constructor(props)
  {
    super(props)
  }

  static navigationOptions = {
    title: 'React Native'
  }

  render()
  {
    return(
      <Text>{pagesDisplayArr.filter(index => index.title==="React Native")[0].view}</Text>
    )
  }
}


export default ReactNativePage