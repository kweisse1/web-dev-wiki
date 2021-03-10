import React, {Component} from "react"
import {View, Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"

//every wiki-info page should  be displayed via this component
class InfoDisplay extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      pageObject: pagesDisplayArr.filter(index => index.title===this.props.navigation.state.params.title)[0]
    }
  }
 
  // sets stack navigator header details, these params are defined and passed in through the homepage component.
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerRight: navigation.state.params.docsButton
  });

  render()
  {
    return(
      // The look and content of the page is defined in shared/data.js
      <View><Text>{this.state.pageObject.view}</Text></View>
    )
  }
}

export default InfoDisplay