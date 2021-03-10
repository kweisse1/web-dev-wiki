import React, {Component} from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"
import {OfficialDocsButton} from "../index"

//pull out the specific page we need from pagesDisplayArr refer to the props we need by calling pageObject.prop
const pageObject= pagesDisplayArr.filter(index => index.title==="React")[0]

class ReactPage extends Component
{
  constructor(props)
  {
    super(props)
  }
 
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerRight: navigation.state.params.docsButton
  });

  render()
  {
    return(
      <Text>{pageObject.view}</Text>
    )
  }
}

export default ReactPage