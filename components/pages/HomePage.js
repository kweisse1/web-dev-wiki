import React, {Component} from "react"
import {Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements'
import pagesDisplayArr from "../../shared/data.js"


class HomePage extends Component
{
  constructor(props)
  {
    super(props)
  }


  render()
  {

    const renderPageSelection=({item})=>
    {
      return(

        <ListItem 
            title={item.title}
        />
      )
    }

    return(
      <>
      <Text>Web  Dev Wiki</Text>
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