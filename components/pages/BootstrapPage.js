import React from "react"
import {Text} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"


function BootstrapPage(props)
{
  
  return(
    // Search for the page we want by title.
    <Text>{pagesDisplayArr.filter(index => index.title==="Bootstrap")[0].view}</Text>
  )
}

export default BootstrapPage