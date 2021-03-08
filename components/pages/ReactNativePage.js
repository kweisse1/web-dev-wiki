import React from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"


function ReactNativePage(props)
{
  
  return(
    // Search for the page we want by title.
    <Text>{pagesDisplayArr.filter(index => index.title==="React Native")[0].view}</Text>
  )
}

export default ReactNativePage