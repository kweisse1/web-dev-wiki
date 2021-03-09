import React, {Component} from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"
import {OfficialDocsButton} from "../index"

//pull out the specific page we need from pagesDisplayArr refer to the props we need by calling pageObject.prop
const pageObject= pagesDisplayArr.filter(index => index.title==="Bootstrap")[0]

class BootstrapPage extends Component
{
  constructor(props)
  {
    super(props)
  }
 
  static navigationOptions = {
    title: pageObject.title,
    headerRight: () => (
      <OfficialDocsButton url={pageObject.documentationLink}/>),
  }

  render()
  {
    return(
      <Text>{pageObject.view}</Text>
    )
  }
}

export default BootstrapPage