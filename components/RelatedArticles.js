import React from "react"
import {InternalLink} from "../components/"
import {FlatList, View} from "react-native"
import styles from "../shared/styles"

// generates a list of internal links based on the related articles parameter of the instance of the page class.
function RelatedArticles(props)
{
  const renderLinks= ({item}) =>
  {
    return(
      <View style={{marginVertical: 10, marginHorizontal: 5}}>
      <InternalLink techName={item} type="button" buttonStyle={{backgroundColor: styles.nav.backgroundColor}}/>
      </View>
    )
  }
  
  const numLinks= props.articleNames.length
  
      return(
        <>
        <View style={{flexDirection: "row"}}>
        <FlatList data={props.articleNames.slice((numLinks/2),numLinks)} renderItem={renderLinks}/>
        <FlatList data={props.articleNames.slice(0,(numLinks/2))} renderItem={renderLinks}/>
        </View>
        </>)
}

export default RelatedArticles