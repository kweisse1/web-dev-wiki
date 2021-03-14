import React, {Component} from 'react';
import { Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import pageDisplayArr from "../shared/data.js"
import {ExternalLink} from "./index"

//Internal link component takes in two props, techName and type, only techName is required, if the prop type="button" is provided the link will be in a button instead of as text. The techName prop tells the stackNavigator which wiki article to link to by article title.
class InternalLink extends Component 
{
  render() {
    const {navigate}= this.props.navigation

    //search pagesDisplayArr for the tech given bt the techName prop
    const selectedTech=(pageDisplayArr.filter(index=>index.title === this.props.techName)[0])

    //Internal Link rendered as a Button
    if(this.props.type==="button")
    return (
      <Button
        //this color prop determines the color of the button that links to the next page
        color="#5637DD"
        title={selectedTech.title}
        onPress={()=> navigate("InfoDisplayPage",{
            title: selectedTech.title, 
            docsButton: ()=> (
              <ExternalLink type="button" resourceName="View Official Docs" url={selectedTech.documentationLink}/>)
          })}
      />
    )

    //Internal Link rendered as a text link rather than a button this is the default if no type prop is provided.
    return (
        <Text 
          onPress={()=> navigate("InfoDisplayPage",{
            title: selectedTech.title, 
            docsButton: ()=> (
              <ExternalLink type="button" resourceName="View Official Docs" url={selectedTech.documentationLink}/>)
          })}>{selectedTech.title}</Text>
    )
  }
}

// withNavigation returns a component that wraps InternalLink and passes in the
// navigation prop
export default withNavigation(InternalLink);