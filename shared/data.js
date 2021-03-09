import React from "react" 
import {Text, StyleSheet} from "react-native"

//Used to generate pages
 class Page
 {
     constructor(routeName, title, documentationLink, summary, additionalResources="additional resources listed here")
     {
        this.title= title,
        this.documentationLink= documentationLink, 
        this.summary= summary, 
        this.additionalResources= additionalResources, 
        this.routeName= routeName
     }

     add()
     {
        pageObjectsArr.push(this)
        return this;
     } 
 }

//Define styles
 const styles = StyleSheet.create({
       
  title: {
    fontSize: 26,
    color: "#551A8B"
  }, 

  main:{
    fontSize: 18,
  }
});

//Page Info Gets stored here
const pageObjectsArr=[];

function ReactAdditionalResources(props)
{
  return(<Text style={styles.main}> {"google.com"}</Text>)
}

//Page creation and add to pageObjectsArr 
// possible pages? react redux, react thunk, fetch api, react router, react native navigation, reactstrap, html5, css3, javascript, mongo db, express, node js, git/github, vscode, anything else you want to add.  

new Page("ReactPage","React","https://reactjs.org/docs/getting-started.html","React is a JavaScript library released by Facebook in 2013. It is used to build UI components for single page web applications.",<ReactAdditionalResources />).add()

new Page("ReactNativePage","React Native","https://reactnative.dev/docs/getting-started","React Native leverages the power of React to create mobile applications").add()

new Page("BootstrapPage","Bootstrap","https://getbootstrap.com/docs/5.0/getting-started/introduction/","Bootstrap is a CSS framework for developing responsive mobile-first websites. It was released in 2011 by Twitter.").add()

new Page("SassPage","Sass","https://sass-lang.com/documentation","Sass is a CSS preprocessor. It complies to CSS which can be parsed by the browser. Sass provides developers with powerful tools to make writing CSS more pleasant, such as; variables, nested rules, mixins and functions").add()



//Defines the look of the pages NEEDS major edits
const pagesViewArr= pageObjectsArr.map(index => 
    {
        return(
            <>
            <Text style={styles.title}>{"\n"}{"\n"}{index.title}{"\n"}{"\n"}</Text>
            <Text style={styles.title}>     Tech Summary{"\n"}{"\n"}</Text>
            <Text style={styles.main}>{`       ${index.summary}`}</Text>
            <Text style={styles.title}>{"\n"}{"\n"}Official Documentation{"\n"}{"\n"}</Text>
            <Text style={styles.main}>   {index.documentationLink}{"\n"}{"\n"}</Text>
            <Text style={styles.title}>Additional Resources{"\n"}{"\n"}</Text>
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