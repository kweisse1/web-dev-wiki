import React from "react" 
import {StyleSheet, ScrollView} from "react-native"
import {ReactTechSummary, ReactReduxTechSummary, BootstrapTechSummary, ReactNativeTechSummary, ReactNavigationTechSummary, ReactRouterTechSummary, SassTechSummary, GitHubTechSummary} from "../components/techSummaries/"
import {Card} from "react-native-elements"

//import from index acting goofy
import RelatedArticles from "../components/RelatedArticles"
import AdditionalResources from "../components/AdditionalResources"
//Used to generate pages
 class Page
 {
     constructor(title, documentationLink, summary, relatedArticles, additionalResources)
     {
        this.title= title,
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

//Define styles
 const styles = StyleSheet.create({
       
  title: {
    fontSize: 26,
    color: "#5637DD"
  }, 

  main:{
    fontSize: 18,
  }
});

//Page Info Gets stored here
const pageObjectsArr=[];

//Page creation and add to pageObjectsArr 
// possible pages?  react thunk, fetch api, reactstrap, html5, css3, javascript, mongo db, express, node js, git/github, vscode, anything else you want to add. react animated  

new Page("Bootstrap","https://getbootstrap.com/docs/5.0/getting-started/introduction/",<BootstrapTechSummary />, ["React"], [{resourceName: "google", url: "https://www.google.com/"}, {resourceName: "Yahoo", url: "https://www.yahoo.com/"}] ).add()

new Page("React","https://reactjs.org/docs/getting-started.html", <ReactTechSummary />,["Sass", "React Router"]).add()

new Page("React Native","https://reactnative.dev/docs/getting-started",<ReactNativeTechSummary />).add()

new Page("React Navigation","https://reactnavigation.org/", <ReactNavigationTechSummary />).add()

new Page("React Redux","https://react-redux.js.org/",<ReactReduxTechSummary /> ).add()

new Page("React Router","https://reactrouter.com/web/guides/quick-start", <ReactRouterTechSummary />).add()

new Page("Sass","https://sass-lang.com/documentation", <SassTechSummary />).add()

new Page("Github","https://docs.github.com/en/github",<GitHubTechSummary />).add() 

//Defines the look of the pages NEEDS major edits
const pagesViewArr= pageObjectsArr.map(index => 
    {
        return(
            <>
              {/* adjust universal style here */}
              <ScrollView style={{backgroundColor: "#CFCFCF"}}>
              <Card title="Tech Summary" titleStyle={styles.title}>
               {index.summary}
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