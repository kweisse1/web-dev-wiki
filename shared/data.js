import React from "react" 
import {Text, StyleSheet} from "react-native"
import {InternalLink, ExternalLink} from "../components"
import {Card} from "react-native-elements"

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

//an example of how to use components in the array remove this for when releasing.
function ReactAdditionalResources(props)
{
  return(
  <>
  <InternalLink techName="React Native" type="button"/>
  <ExternalLink resourceName="GitHub Link" url="https://github.com/kweisse1/web-dev-wiki" type="button"/>
  </>)
}

//Page creation and add to pageObjectsArr 
// possible pages?  react thunk, fetch api, react router, reactstrap, html5, css3, javascript, mongo db, express, node js, git/github, vscode, anything else you want to add. react animated  

new Page("Bootstrap","https://getbootstrap.com/docs/5.0/getting-started/introduction/","Bootstrap is a CSS framework for developing responsive mobile-first websites. It was released in 2011 by Twitter. While Bootstrap does provide developers with some useful components such as navbars, buttons, cards and carousels, its main claim to fame is its responsive grid system. Bootstrap uses CSS classes to make a websites layout responsive to the size of the viewport.").add()

new Page("React","https://reactjs.org/docs/getting-started.html","React is a JavaScript library released by Facebook in 2013. It is used to build UI components for single page web applications. Sites built using a library like React are far more flexible and interactive then those built with HTML. React focuses on using customizable, reusable components rather than static pages. Instead of direct DOM manipulation, React utilizes a virtual DOM. React compares the DOM to the virtual DOM and makes any adjustments necessary, this can lead to performance gains over traditional DOM manipulation. React offers improvements not only at runtime; development is faster as well. ",<ReactAdditionalResources />).add()

new Page("React Native","https://reactnative.dev/docs/getting-started","React Native leverages the power of React to create mobile applications. One major benefit to writing applications in this way is that the codebase can be written once and run on both the iOS and Android platforms. React does this by mapping JavaScript to native code. While this method of app development has its advantages, it does come with its downsides as well. Native apps will have better performance than those written in React Native. React native is written in a similar fashion to React but has different components. ").add()

new Page("React Navigation","https://reactnavigation.org/","React Navigation is a library that provides developers tools to set up internal navigation of a React Native application. To this end React Navigation offers stack, tab and drawer navigation among others.   ").add()

new Page("React Redux","https://react-redux.js.org/","React Redux is a library that is used to make sharing information between components easier. This is accomplished by creating a store object that provides an application with a global state. Once components are connected to the the redux store, they can both read and update the global state. Access to the store is provided to components by a mapping of the state of the global store to the properties of the individual component. Redux operates on three fundamental principles. The first of these principles is that redux provides a single source of truth. By having a consistent access point to data, debugging code can be made much easier. The second principle of Redux is that the state of the store is read-only. The global state of the redux store is never written to directly. This helps ensure that all changes to the store are centralized and are made in a strict order. As a result of this principle the proper way to change the state of the redux store is to use actions. Actions are plain JavaScript objects that describe what happened.The third fundamental principle of Redux is that changes are made with pure functions. Reducers are pure functions that take in information provided by actions and use it to update the state of the redux store. Reducers accomplish this not by making updates to the store directly but instead by returning the next state." ).add()

new Page("React Router","https://reactrouter.com/web/guides/quick-start","React Router is a library designed to aid in the internal navigation of React single page applications. React Router provides developers with the tools they need to make a single page application feel like a multi-page website from the perspective of the end user. One such example is that by using url parameters, developers can take advantage of React Router's dynamic routing capabilities. This would be very powerful in an e-Commerce Store front. Instead of developers writing a separate item info page for each product they have on offer, they can instead use the url parameters to render a page specific to the link the user has clicked on." ).add()

new Page("Sass","https://sass-lang.com/documentation","Sass is a CSS preprocessor. It complies to CSS which can be parsed by the browser. Sass provides developers with powerful tools to make writing CSS more pleasant, such as; variables, nested rules, mixins and functions").add()

new Page("Github","https://docs.github.com/en/github","Github is a website used for version control. Users can store their code on this website in a repository and share it with others.This enables developers to collaborate on projects in a effective manner. Additionally Github provides access to older versions of a codebase that have been committed. This means that if something goes wrong in the codebase developers are able to retrieve a previous, working version of the project they are working on instead of starting a project over from scratch. Furthermore Github protects users code should should something happen to the copy they have on their local machine.").add() 

//Defines the look of the pages NEEDS major edits
const pagesViewArr= pageObjectsArr.map(index => 
    {
        return(
            <>
              {/* adjust universal style here */}
              
              <Text style={styles.title}>     Tech Summary{"\n"}{"\n"}</Text>
              <Text style={styles.main}>{`       ${index.summary}`}</Text>
              <Text style={styles.title}>{"\n"}{"\n"}Additional Resources{"\n"}{"\n"}</Text>
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

//alphabetize pageDisplayArr by title
pageDisplayArr.sort((a, b) => (a.title > b.title) ? 1 : -1)

export default pageDisplayArr;