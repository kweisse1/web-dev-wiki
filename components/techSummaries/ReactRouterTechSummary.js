import React from "react"
import {Paragraph} from "../../components/"

function ReactRouterTechSummary(props)
{
return(

<>
 <Paragraph text={`             React Router is a library designed to aid in the internal navigation of React single page applications. React Router provides developers with the tools they need to make a single page application feel like a multi-page website from the perspective of the end user. One such example is that by using url parameters, developers can take advantage of React Router's dynamic routing capabilities.
 `}/>
 
 <Paragraph text={`             This would be very powerful in an e-Commerce Store front. Instead of developers writing a separate item info page for each product they have on offer, they can instead use the url parameters to render a page specific to the link the user has clicked on.`}/>
</>
)

}
export default ReactRouterTechSummary