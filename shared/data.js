import React from "react" 
import {Text, StyleSheet} from "react-native"

//Used to generate pages
 class Page
 {
     constructor(title, documentationLink, summary, additionalResources)
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

function ReactAdditionalResources(props)
{
  return(<Text style={styles.main}> {"google.com"}</Text>)
}

//Page creation and add to pageObjectsArr 
const reactPage = new Page("React","https://reactjs.org/docs/getting-started.html","React is a tool for developing responsive websites",<ReactAdditionalResources />).add()



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