import React from "react"
import {ExternalLink} from "../components/"
import {FlatList, View} from "react-native"

//Generates a list  of external links based on the additional resource parameter on the instance of the page class.
function AdditionalResources(props)
{
  const renderLinks= ({item}) =>
  {
    return(
      <View style={{marginVertical: 10, marginHorizontal: 5}}>
      <ExternalLink  resourceName={item.resourceName} url={item.url} type="button" buttonStyle={{backgroundColor: "#464646"}}/>
      </View>
    )
  }
  
  const numLinks= props.resourceList.length
  
      return(
        <>
        <View style={{flexDirection: "row"}}>
        <FlatList data={props.resourceList.slice((numLinks/2),numLinks)} renderItem={renderLinks}/>
        <FlatList data={props.resourceList.slice(0,(numLinks/2))} renderItem={renderLinks}/>
        </View>
        </>)
}

export default AdditionalResources