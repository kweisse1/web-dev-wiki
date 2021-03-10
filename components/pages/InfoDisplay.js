import React, {Component} from "react"
import {View, Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"

class InfoDisplay extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      pageObject: pagesDisplayArr.filter(index => index.title===this.props.navigation.state.params.title)[0]
    }
  }
 
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerRight: navigation.state.params.docsButton
  });

  render()
  {
    return(
      <View><Text>{this.state.pageObject.view}</Text></View>
    )
  }
}

export default InfoDisplay