import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import pagesDisplayArr from "./data.js"


function Example(props)
{
  
  return(
    // Search for the page we want by title.
    <Text>{pagesDisplayArr.filter(index => index.title==="React")[0].view}</Text>
  )
}

export default Example