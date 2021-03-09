import React, {Component} from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"


class SassPage extends Component
{
  constructor(props)
  {
    super(props)
  }

  static navigationOptions = {
    title: 'Sass'
  }

  render()
  {
    return(
      <Text>{pagesDisplayArr.filter(index => index.title==="Sass")[0].view}</Text>
    )
  }
}

export default SassPage