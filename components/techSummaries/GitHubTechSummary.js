import React from "react"
import {Paragraph} from ".."

function GitHubTechSummary(props)
{
return(

 <>
 <Paragraph text={`             Github is a website used for version control. Users can store their code on this website in a repository and share it with others.This enables developers to collaborate on projects in a effective manner.
 `}/> 
 
 <Paragraph text={`             Additionally Github provides access to older versions of a codebase that have been committed. This means that if something goes wrong in the codebase developers are able to retrieve a previous, working version of the project they are working on instead of starting a project over from scratch. Furthermore Github protects users code should should something happen to the copy they have on their local machine.`}/>
 </>
)

}
export default GitHubTechSummary