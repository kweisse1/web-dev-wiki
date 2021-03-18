import React from "react"
import * as Linking from 'expo-linking';
import {Button, Text} from "react-native"

//takes in three props, url, type, and resourceName. Url is a required prop and tells the link where to point. If the prop type="button" is provided the link will be rendered as a button instead of as text. ResourceName prop controls the text that is displayed by the link.
function ExternalLink (props)
{
    if (props.type==="button"){
    return(

        <Button
        onPress={()=>Linking.openURL(props.url)}
        title={props.resourceName}
        color={props.color? props.color :"#000"}
      />
    )
    }

    return(
    
    <Text onPress={()=>Linking.openURL(props.url)}>
        {props.resourceName}
    </Text>)
}

export default ExternalLink