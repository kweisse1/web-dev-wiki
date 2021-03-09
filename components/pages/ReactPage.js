import React, {Component} from "react"
import {Text, Button} from 'react-native';
import pagesDisplayArr from "../../shared/data.js"
import * as Linking from 'expo-linking';

class ReactPage extends Component
{
  constructor(props)
  {
    super(props)
  }

  static navigationOptions = {
    title: 'React',
    headerRight: () => (
      <Button
        onPress={()=>Linking.openURL(pagesDisplayArr.filter(index => index.title==="React")[0].documentationLink)}
        title="View Official Docs"
        color="#000"
        style={{margin: 10}}
      />
    ),
  }

  render()
  {
    return(
      <Text>{pagesDisplayArr.filter(index => index.title==="React")[0].view}</Text>
    )
  }
}

export default ReactPage