import React, {Component} from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"

class ReactPage extends Component
{
  constructor(props)
  {
    super(props)
  }

  static navigationOptions = {
    title: 'React'
  }

  render()
  {
    return(
      <Text>{pagesDisplayArr.filter(index => index.title==="React")[0].view}</Text>
    )
  }
}

export default ReactPage