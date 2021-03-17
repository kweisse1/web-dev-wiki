import React from "react"
import {Paragraph} from "../../components/"

function ReactReduxTechSummary(props)
{
return(

<>
 <Paragraph text={`             React Redux is a library that is used to make sharing information between components easier. This is accomplished by creating a store object that provides an application with a global state. Once components are connected to the the redux store, they can both read and update the global state. Access to the store is provided to components by a mapping of the state of the global store to the properties of the individual component.
 `} />
 
 <Paragraph text={`             Redux operates on three fundamental principles. The first of these principles is that redux provides a single source of truth. By having a consistent access point to data, debugging code can be made much easier. The second principle of Redux is that the state of the store is read-only. The global state of the redux store is never written to directly. This helps ensure that all changes to the store are centralized and are made in a strict order. As a result of this principle the proper way to change the state of the redux store is to use actions. Actions are plain JavaScript objects that describe what happened.The third fundamental principle of Redux is that changes are made with pure functions. Reducers are pure functions that take in information provided by actions and use it to update the state of the redux store. Reducers accomplish this not by making updates to the store directly but instead by returning the next state.`}/>
</>
)

}
export default ReactReduxTechSummary