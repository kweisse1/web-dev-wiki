import React, {Component} from "react"
import {FlatList, TextInput} from 'react-native';
import {ListItem} from 'react-native-elements'
import pagesDisplayArr from "../../shared/data.js"
import {OfficialDocsButton} from "../index"


class HomePage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      articlesShown: pagesDisplayArr,
      searchTerms: ""
    }
    this.handleInputChange= this.handleInputChange.bind(this)
    this.handleInputChange= this.handleInputChange.bind(this)
  }

  handleInputChange = (text) =>
  {
    this.setState({searchTerms: text})
  }

  filterResults()
  {
    const filteredArr= pagesDisplayArr.filter(index => index.title.includes(this.state.searchTerms))
    return filteredArr
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
            onPress={()=> navigate("InfoDisplayPage",{
              title: item.title, 
              docsButton: ()=> (
                <OfficialDocsButton url={item.documentationLink}/>)
            })}
        />
      )
    }
    console.log(this.state.searchTerms)
    console.log(this.state.articlesShown.filter(index => index.title.includes("o")))
    return(
      <>
      <TextInput
       style={{ height: 40, width:350, borderColor: 'gray', borderWidth: 1 }}
       placeholder="Search the Wiki..."
       onChangeText= {this.handleInputChange}
       />
      <FlatList
        data={this.filterResults()}
        renderItem={renderPageSelection}
        keyExtractor={item => item.title}
      />
      </>
    )
  }
}

export default HomePage