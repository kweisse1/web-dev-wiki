import React from "react"
import * as Linking from 'expo-linking';
import {Text} from "react-native"
import {Button, Icon} from "react-native-elements"

//takes in four props, url, type, buttonStyle and resourceName. Url is a required prop and tells the link where to point. If the prop type="button" is provided the link will be rendered as a button instead of as text. If the prop type="button" the buttonStyle prop can be used to style the button.ResourceName prop controls the text that is displayed by the link.
function ExternalLink (props)
{
    if (props.type==="button"){
    return(
        <Button
        buttonStyle={props.buttonStyle? props.buttonStyle : ""}
        onPress={()=>Linking.openURL(props.url)}
        title={props.resourceName}
        icon={props.icon}
      />
    )
    }

    return(
    
    <Text onPress={()=>Linking.openURL(props.url)}>
        {props.resourceName}
    </Text>)
}

export default ExternalLink