import React from "react"
import {FlatList, View, Text} from "react-native"


//generates info based on the array passed in as a content prop this can be edited to take in an array of objects to include images as well but has not yet been implemented.
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