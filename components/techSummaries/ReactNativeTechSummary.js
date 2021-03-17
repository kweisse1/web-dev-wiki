import React from "react"
import {Paragraph} from "../../components/"

function ReactNativeTechSummary(props)
{
return(
<>
 <Paragraph text={`             React Native leverages the power of React to create mobile applications. While very similar in structure to React, React Native utilizes a different set of components.
 `}/>
 
 <Paragraph text={`             One major benefit to writing applications in this way is that the codebase can be written once and run on both the iOS and Android platforms. React does this by mapping JavaScript to native code. While this method of app development has its advantages, it does come with its downsides as well. Native apps will have better performance than those written in React Native.`}/>
</>
)

}
export default ReactNativeTechSummary