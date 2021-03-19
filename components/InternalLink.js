import React, {Component} from 'react';
import {Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import pageDisplayArr from "../shared/data.js"
import {ExternalLink} from "./index"
import {Button, Icon} from "react-native-elements"

//Internal link component takes in three props, techName, buttonStyle and type, only techName is required, if the prop type="button" is provided the link will be in a button instead of as text. If the prop type is button it can be styled with the buttonStyle prop.The techName prop tells the stackNavigator which wiki article to link to by article title.
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
        buttonStyle={this.props.buttonStyle? this.props.buttonStyle : ""}
        title={selectedTech.title}
        icon={<Icon name={selectedTech.iconInfo.name} type={selectedTech.iconInfo.type} color="#fff" size={20} marginRight={5} />}
        onPress={()=> navigate("InfoDisplayPage",{
            title: selectedTech.title, 
            docsButton: ()=> (
              <ExternalLink type="button" resourceName="View Docs" url={selectedTech.documentationLink} buttonStyle={{backgroundColor: "#464646", marginRight: 20}}/>)
          })}
      />
    )

    //Internal Link rendered as a text link rather than a button this is the default if no type prop is provided.
    return (
        <Text 
          onPress={()=> navigate("InfoDisplayPage",{
            title: selectedTech.title, 
            docsButton: ()=> (
              <ExternalLink type="button" resourceName="View Docs" url={selectedTech.documentationLink}/>)
          })}>{selectedTech.title}</Text>
    )
  }
}

// withNavigation returns a component that wraps InternalLink and passes in the
// navigation prop
export default withNavigation(InternalLink);