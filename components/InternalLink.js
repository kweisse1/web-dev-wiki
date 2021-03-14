import React, {Component} from 'react';
import { Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import pageDisplayArr from "../shared/data.js"
import {OfficialDocsButton} from "./index"

//Internal link component takes in two props, techName and type, only techName is required, if the prop type="button" is provided the link will be in a button instead of as text. The techName prop tells the stackNavigator which wiki article to link to by article title.
class InternalLink extends Component 
{
  render() {
    const {navigate}= this.props.navigation
    const selectedTech=(pageDisplayArr.filter(index=>index.title === this.props.techName)[0])

    if(this.props.type==="button")
    return (
      <Button
        title={selectedTech.title}
        onPress={()=> navigate("InfoDisplayPage",{
            title: selectedTech.title, 
            docsButton: ()=> (
              <OfficialDocsButton url={selectedTech.documentationLink}/>)
          })}
      />
    )

    return (
        <Text 
          style={{color: "blue"}}
          onPress={()=> navigate("InfoDisplayPage",{
            title: selectedTech.title, 
            docsButton: ()=> (
              <OfficialDocsButton url={selectedTech.documentationLink}/>)
          })}>{selectedTech.title}</Text>
    )
  }
}

// withNavigation returns a component that wraps InternalLink and passes in the
// navigation prop
export default withNavigation(InternalLink);