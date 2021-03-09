import React, {Component} from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"


class BootstrapPage extends Component
{
  constructor(props)
  {
    super(props)
  }

  static navigationOptions = {
    title: 'Bootstrap'
  }

  render()
  {
    return(
      <Text>{pagesDisplayArr.filter(index => index.title==="Bootstrap")[0].view}</Text>
    )
  }
}


export default BootstrapPage