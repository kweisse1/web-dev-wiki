import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import pagesDisplayArr from "../shared/data.js"


function ReactPage(props)
{
  
  return(
    // Search for the page we want by title.
    <Text>{pagesDisplayArr.filter(index => index.title==="React")[0].view}</Text>
  )
}

export default ReactPage