import React, {Component} from "react"
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements'
import pagesDisplayArr from "../../shared/data.js"
import {OfficialDocsButton} from "../index"


class HomePage extends Component
{
  constructor(props)
  {
    super(props)
  }

  static navigationOptions = {
    title: 'Web Dev Wiki'
  }

  render()
  {
    const {navigate}= this.props.navigation
    const renderPageSelection=({item})=>
    {
      return(

        <ListItem 
            title={item.title}
            onPress={()=> navigate(item.routeName,{
              title: item.title, 
              docsButton: ()=> (
                <OfficialDocsButton url={item.documentationLink}/>)
            })}
        />
      )
    }

    return(
      <>
      <FlatList
        data={pagesDisplayArr}
        renderItem={renderPageSelection}
        keyExtractor={item => item.title}
      />
      </>
    )
  }
}

export default HomePage