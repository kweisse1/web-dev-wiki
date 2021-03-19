import React from "react"
import {FlatList, View, Text} from "react-native"


//Generates a list  of external links based on the additional resource parameter on the instance of the page class.
function TechSummary(props)
{
  const renderArticle= ({item}) =>
  {
    const paragraph= `              ${item}`
    return(
      <View style={{marginVertical: 10}}>
      <Text style={{fontSize: 16}}>
            {paragraph}
      </Text>
      </View>
    )
  }
  
      return(
        <>
        <FlatList data={props.content} renderItem={renderArticle}/>
        </>)
}

export default TechSummary