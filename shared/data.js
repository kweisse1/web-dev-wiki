import React from "react" 
import {StyleSheet, ScrollView} from "react-native"
import {Card} from "react-native-elements"
import styles from "./styles"

//import from index acting goofy
import RelatedArticles from "../components/RelatedArticles"
import AdditionalResources from "../components/AdditionalResources"
import TechSummary from "../components/TechSummary"
//Used to generate pages
 class Page
 {
     constructor(title, documentationLink, summary, relatedArticles, additionalResources, iconInfo={name: 'info-circle', type: 'font-awesome-5'})
     {
        this.title= title,
        this.iconInfo= iconInfo,
        this.documentationLink= documentationLink, 
        this.summary= summary, 
        this.relatedArticles= relatedArticles,
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

//Page creation and add to pageObjectsArr 
// possible pages?  react thunk, fetch api, reactstrap, javascript, mongo db, express, node js, anything else you want to add. react animated  

// page title/url/summary array split by paragraph/internal links arr/external link objects arr.
new Page("Bootstrap",
"https://getbootstrap.com/docs/5.0/getting-started/introduction/",
["Bootstrap is a CSS framework for developing responsive mobile-first websites. It was released in 2011 by Twitter. While Bootstrap does provide developers with some useful components such as navbars, buttons, cards and carousels, its main claim to fame is its responsive grid system. Bootstrap uses CSS classes to make a websites layout responsive to the size of the viewport."], 
["CSS","RN Elements"], 
[{resourceName: "Example Project", url: "https://github.com/RSnodgrass92/captured-creations", icon:{name:"code", type:"font-awesome-5"}},{resourceName: "Tutorial", url: "https://www.youtube.com/watch?v=gqOEoUR5RHg", icon:{name:"video", type:"font-awesome-5"}} ],
{name:"bootstrap", type:"font-awesome-5"} ).add()

new Page("React","https://reactjs.org/docs/getting-started.html",
 ["React is a JavaScript library released by Facebook in 2013. It is used to build UI components for single page web applications. Sites built using a library like React are far more flexible and interactive then those built with HTML.","React focuses on using customizable, reusable components rather than static pages. Instead of direct DOM manipulation, React utilizes a virtual DOM. React compares the DOM to the virtual DOM and makes any adjustments necessary, this can lead to performance gains over traditional DOM manipulation. React offers improvements not only at runtime; development is faster as well."],
 ["HTML", "React Router", "React Native", "React Redux"],
 [{resourceName: "Example Project", url: "https://github.com/RSnodgrass92/fun-thoughts", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0", icon: {name: "video", type: "font-awesome-5"}}], 
 {name: "react", type:"fontisto"}).add()

new Page("React Native",
"https://reactnative.dev/docs/getting-started",
["React Native leverages the power of React to create mobile applications. While very similar in structure to React, React Native utilizes a different set of components.","One major benefit to writing applications in this way is that the codebase can be written once and run on both the iOS and Android platforms. React does this by mapping JavaScript to native code. While this method of app development has its advantages, it does come with its downsides as well. Native apps will have better performance than those written in React Native."],
["React","React Navigation", "React Redux", "RN Elements"],
[{resourceName: "Example Project", url: "https://github.com/kweisse1/web-dev-wiki", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc", icon: {name: "video", type: "font-awesome-5"}}], 
{name: "react", type:"fontisto"}).add()

new Page("React Navigation","https://reactnavigation.org/", 
["React Navigation is a library that provides developers tools to set up internal navigation of a React Native application. In a similar manner to how React Router provides developers tools to navigate a react application. To this end React Navigation offers stack, tab and drawer navigation among others"],
["React Native","React Router"],
[{resourceName: "Example Project", url: "https://github.com/kweisse1/web-dev-wiki", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=OmQCU-3KPms&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=19", icon: {name: "video", type: "font-awesome-5"}}]
).add()

new Page("React Redux","https://react-redux.js.org/",
["React Redux is a library that is used to make sharing information between components easier. This is accomplished by creating a store object that provides an application with a global state. Once components are connected to the the redux store, they can both read and update the global state. Access to the store is provided to components by a mapping of the state of the global store to the properties of the individual component.", "Redux operates on three fundamental principles. The first of these principles is that redux provides a single source of truth. By having a consistent access point to data, debugging code can be made much easier. The second principle of Redux is that the state of the store is read-only. The global state of the redux store is never written to directly. This helps ensure that all changes to the store are centralized and are made in a strict order. As a result of this principle the proper way to change the state of the redux store is to use actions. Actions are plain JavaScript objects that describe what happened.The third fundamental principle of Redux is that changes are made with pure functions. Reducers are pure functions that take in information provided by actions and use it to update the state of the redux store. Reducers accomplish this not by making updates to the store directly but instead by returning the next state."],
["React","React Native"],
[{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=CVpUuw9XSjY&t=2140s", icon: {name: "video", type: "font-awesome-5"}},{resourceName:"Connect Components", url: "https://www.youtube.com/watch?v=9d020AQCtcU&list=PLHKFCqGYAqcDdivqohFDfFGcqeT3Mq32N&index=52&t=1s", icon: {name: "video", type: "font-awesome-5"}}, {resourceName: "Example Project", url: "https://github.com/RSnodgrass92/fun-thoughts", icon:{name:"code", type:"font-awesome-5"}}],
{name:"redux", type:"fontisto"}).add()

new Page("React Router",
"https://reactrouter.com/web/guides/quick-start",
 ["React Router is a library designed to aid in the internal navigation of React single page applications. React Router provides developers with the tools they need to make a single page application feel like a multi-page website from the perspective of the end user. One such example is that by using url parameters, developers can take advantage of React Router's dynamic routing capabilities.",
"This would be very powerful in an e-Commerce Store front. Instead of developers writing a separate item info page for each product they have on offer, they can instead use the url parameters to render a page specific to the link the user has clicked on."],
  ["React", "React Navigation"],
  [{resourceName: "Example Project", url: "https://github.com/RSnodgrass92/fun-thoughts", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=yQf1KbGiwiI&t=2s", icon: {name: "video", type: "font-awesome-5"}}]
  ).add()

new Page("Sass","https://sass-lang.com/documentation",
 ["Sass is a CSS preprocessor. It complies to CSS which can be parsed by the browser. Sass provides developers with powerful tools to make writing CSS more pleasant, such as; variables, nested rules, mixins and functions"],
 ["CSS"],
 [{resourceName: "Example Project", url: "https://github.com/RSnodgrass92/fun-thoughts", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=BDOzg4lXcSg", icon: {name: "video", type: "font-awesome-5"}}],
 {name: "sass", type:"fontisto"}).add()

new Page("Github","https://docs.github.com/en/github",
["Github is a website used for version control. Users can store their code on this website in a repository and share it with others.This enables developers to collaborate on projects in a effective manner.",
 "Additionally Github provides access to older versions of a codebase that have been committed. This means that if something goes wrong in the codebase developers are able to retrieve a previous, working version of the project they are working on instead of starting a project over from scratch. Furthermore Github protects users code should should something happen to the copy they have on their local machine."],
 undefined, 
 [{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=nhNq2kIvi9s&t=1069s", icon: {name: "video", type: "font-awesome-5"}}], 
 {name: "github", type:"fontisto"}).add() 

new Page("HTML", 
"https://developer.mozilla.org/en-US/docs/Web/HTML",
["HTML is short for HyperText Markup Language. Hypertext refers to links that take take the user to another part of the website or to another website altogether.  Generally speaking HTML is concerned with the structure of a website. It is not typically used to define the cosmetics of a website, this is handled by Cascading Style Sheets (CSS). HTML is also not typically used to determine a websites functionality, this is done using JavaScript.", "The syntax of HTML mainly consists of attributes that have a starting tag and an ending tag with content placed in-between them. These tags are wrapped in <> signs and may contain attributes that further define the tags functionality"],
["CSS","React"],
[{resourceName: "Example Project", url: "https://github.com/RSnodgrass92/captured-creations", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg", icon: {name: "video", type: "font-awesome-5"}},{resourceName:"W3 Schools", url: "https://www.w3schools.com/html/", icon: {name: "file-text", type: "font-awesome"}}],
{name: "html5", type:"fontisto"}).add()

new Page("CSS",
 "https://developer.mozilla.org/en-US/docs/Web/CSS",
 ["CSS is short for Cascading Style Sheets. CSS is a stylesheet language, its purpose is to determine the presentation of an HTML document. This is accomplished by calling on values of html attributes. If there are contradictory rules for the presentation of a component, the actual look is determined by CSS specificity rules. While writing pure CSS is certainly possible, it is not as pleasant as using a CSS preprocessor such as SASS from a development perspective."], 
 ["Sass","HTML","Bootstrap"],
 [{resourceName: "Example Project", url: "https://github.com/RSnodgrass92/NucampSite", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=1PnVor36_40", icon: {name: "video", type: "font-awesome-5"}},{resourceName:"W3 Schools", url: "https://www.w3schools.com/css/default.asp", icon: {name: "file-text", type: "font-awesome"}}],
  {name: "css3", type:"fontisto"} ).add()

 new Page("Visual Studio Code",
 "https://code.visualstudio.com/docs",
 ["Visual Studio Code is a code editor developed by Microsoft and released in 2015. Visual Studio Code code offers developers powerful tools to streamline their workflow. These features include but are not limited to Emmet abbreviations, IntelliSense and an integrated terminal. Additionally, Visual Studio code provides support for version control. Visual Studio Code can also be tailored to a developers liking through one of the many community developed extensions available. "], 
 undefined,
 [{resourceName:"Best Extensions", url: "https://x-team.com/blog/best-vscode-extensions/", icon: {name: "file-text", type: "font-awesome"}}, {resourceName:"Mac Shortcuts", url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=code-online-jopapa", icon: {name: "file-text", type: "font-awesome"}},{resourceName:"PC Shortcuts", url: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf", icon: {name: "file-text", type: "font-awesome"}}],
  {name: "visual-studio", type:"fontisto"} ).add()

  new Page("RN Elements",
 "https://reactnativeelements.com/docs",
 ["React Native Elements is a JavaScript library that contains several styled components designed to be used with React Native. React Native Elements has a similar relationship to React Native that Bootstrap has with HTML. The UI components make it easier for React Native developers to get an application up and running much faster."], 
 ["React Native","Bootstrap"],
 [{resourceName: "Example Project", url: "https://github.com/kweisse1/web-dev-wiki", icon:{name:"code", type:"font-awesome-5"}},{resourceName:"Tutorial", url: "https://www.youtube.com/watch?v=kFz-CY2Wv0o", icon: {name: "video", type: "font-awesome-5"}}],
{name: "react", type:"fontisto"} ).add()

//Defines the look of the pages NEEDS major edits
const pagesViewArr= pageObjectsArr.map(index => 
    {
        return(
            <>
              {/* adjust universal style here */}
              <ScrollView style={{backgroundColor: styles.infoDisplay.backgroundColor}}>
              <Card title="Tech Summary" titleStyle={styles.title}>
              <TechSummary content={index.summary}/>
              </Card>
              
              {index.relatedArticles?
              <Card title="Related Wiki Articles" titleStyle={styles.title}>
              <RelatedArticles articleNames={index.relatedArticles}/>
              </Card> : <></> }
              
              {index.additionalResources?
              <Card title="Additional Resources" titleStyle={styles.title}>
              <AdditionalResources resourceList={index.additionalResources} />
              </Card> : <></>}

              </ScrollView>
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