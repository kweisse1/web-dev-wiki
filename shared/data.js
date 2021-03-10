import React from "react" 
import {Text, StyleSheet, Button} from "react-native"
import * as Linking from 'expo-linking';
import {Spacing } from '../components/styles';
//Used to generate pages
 class Page
 {
     constructor(title, documentationLink, summary, additionalResources="additional resources listed here")
     {
        this.title= title,
        this.documentationLink= documentationLink, 
        this.summary= summary, 
        this.additionalResources= additionalResources 
     }

     add()
     {
        pageObjectsArr.push(this)
        return this;
     } 
 }

//Page Info Gets stored here
const pageObjectsArr=[];

function ReactAdditionalResources(props)
{
  return(<Text style={Spacing.main}> {"google.com"}</Text>)
}

//Page creation and add to pageObjectsArr 
// possible pages? react redux, react thunk, fetch api, react router, react native navigation, reactstrap, html5, css3, javascript, mongo db, express, node js, git/github, vscode, anything else you want to add.  

new Page("React","https://reactjs.org/docs/getting-started.html","React is a JavaScript library released by Facebook in 2013. It is used to build UI components for single page web applications.",<ReactAdditionalResources />).add()

new Page("React Native","https://reactnative.dev/docs/getting-started","React Native leverages the power of React to create mobile applications").add()

new Page("Bootstrap","https://getbootstrap.com/docs/5.0/getting-started/introduction/","Bootstrap is a CSS framework for developing responsive mobile-first websites. It was released in 2011 by Twitter.").add()

new Page("Sass","https://sass-lang.com/documentation","Sass is a CSS preprocessor. It complies to CSS which can be parsed by the browser. Sass provides developers with powerful tools to make writing CSS more pleasant, such as; variables, nested rules, mixins and functions").add()

//Defines the look of the pages NEEDS major edits
const pagesViewArr= pageObjectsArr.map(index => 
    {
        return(
            <>
              {/* adjust universal style here */}
              <Text style={Spacing.title}>     Tech Summary{"\n"}{"\n"}</Text>
              <Text style={Spacing.main}>{`       ${index.summary}`}</Text>
              <Text style={Spacing.title}>{"\n"}{"\n"}Additional Resources{"\n"}{"\n"}</Text>
              {index.additionalResources}
            </>
        )
    });


//Final output
const pageDisplayArr=[]

//Adds on the view to the page objects array so that we can filter based on name order-agnostic
for (let x=0; x<pageObjectsArr.length; x++)
{
  pageDisplayArr.push(pageObjectsArr[x])
  pageDisplayArr[x].view= pagesViewArr[x]
}

export default pageDisplayArr;