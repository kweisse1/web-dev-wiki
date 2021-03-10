import React from "react"
import * as Linking from 'expo-linking';
import {Button} from "react-native"

//for use in stack navigator- links to official docs
function OfficialDocsButton (props)
{
    return(

          <Button
        onPress={()=>Linking.openURL(props.url)}
        title="View Official Docs"
        color="#000"
      />
    )
}

export default OfficialDocsButton