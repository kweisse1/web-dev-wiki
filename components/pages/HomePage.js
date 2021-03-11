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
      searchTerms: ""
    }
    this.handleInputChange= this.handleInputChange.bind(this)
    this.handleInputChange= this.handleInputChange.bind(this)
  }

  //keeps track of form input
  handleInputChange = (text) =>
  {
    this.setState({searchTerms: text})
  }

  //uses form input to filter results, display only values that the user searches for
  filterResults()
  {
    const filteredArr= pagesDisplayArr.filter(index => index.title.toLowerCase().includes(this.state.searchTerms.toLowerCase()))
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
   
    return(
      <>
      <TextInput
       style={{ height: 40, borderColor: 'purple', borderWidth: 1 }}
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