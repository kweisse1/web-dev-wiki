import React, {Component} from "react"
import {FlatList} from 'react-native';
import {ListItem, SearchBar, Icon} from 'react-native-elements'
import pagesDisplayArr from "../../shared/data.js"
import {ExternalLink} from "../index"



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

  //keeps track of search bar input
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
            titleStyle={{fontSize: 20, marginLeft:0}}
            leftAvatar={<Icon name={item.iconInfo.name} type={item.iconInfo.type} color="#5637DD" size={38} iconStyle={{marginRight: 0}}/>}
            onPress={()=> navigate("InfoDisplayPage",{
              title: item.title, 
              docsButton: ()=> (
                <ExternalLink url={item.documentationLink} resourceName="View Docs" type="button" buttonStyle={{backgroundColor: "#464646", marginRight: 20}} icon={<Icon name="file-text" type="font-awesome" color="#fff" size={20} marginRight={5}/>}/>)
            })}
        >
        </ListItem>
      )
    }
   
    return(
      <>

      <SearchBar
      round 
      placeholder="Search the Wiki..."
      onChangeText= {this.handleInputChange}
      value={this.state.searchTerms}/>
     
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