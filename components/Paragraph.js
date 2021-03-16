import React from "react"
import {Text} from "react-native"

// this component is used to store text that can be all styled the same way easily
function Paragraph(props)
{
    return (
        <Text style={{fontSize: 16}}>
            {props.text}
        </Text>
        )
}

export default Paragraph