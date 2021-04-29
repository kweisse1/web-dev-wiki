import React from "react" 
import {StyleSheet, ScrollView} from "react-native"
import {Card} from "react-native-elements"
import styles from "./styles"

//import from index acting goofy
import RelatedArticles from "../components/RelatedArticles"
import AdditionalResources from "../components/AdditionalResources"
import TechSummary from "../components/TechSummary"

async function getArticles()
{
  const response= await fetch("http://localhost:3000/articles")
  const data = await response.json()
  const pagesViewArr= data.map(index => 
    {
        return(
            <>
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
  for (let x=0; x<data.length; x++)
  {
    pageDisplayArr.push(data[x])
    pageDisplayArr[x].view= pagesViewArr[x]
  }
  //alphabetize pageDisplayArr by title
  pageDisplayArr.sort((a, b) => (a.title > b.title) ? 1 : -1)


  return pageDisplayArr
}

const secondFunction = async () =>
{
  const result = await getArticles()
  return result
}

console.log(secondFunction());
export default secondFunction();