import React from "react"
import {Paragraph} from "../../components/"


function ReactTechSummary(props)
{
return(

<>
 <Paragraph text={`             React is a JavaScript library released by Facebook in 2013. It is used to build UI components for single page web applications. Sites built using a library like React are far more flexible and interactive then those built with HTML.
 `}/>
 
 <Paragraph text={`             React focuses on using customizable, reusable components rather than static pages. Instead of direct DOM manipulation, React utilizes a virtual DOM. React compares the DOM to the virtual DOM and makes any adjustments necessary, this can lead to performance gains over traditional DOM manipulation. React offers improvements not only at runtime; development is faster as well.`}/>
 </>
)

}
export default ReactTechSummary