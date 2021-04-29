import React, {Component} from "react"
import {FlatList} from 'react-native';
import {ListItem, SearchBar, Icon} from 'react-native-elements'
import getpages from "../../shared/data.js"
import {ExternalLink} from "../index"
import * as Animatable from "react-native-animatable"
import styles from "../../shared/styles"
import {connect} from "react-redux"
import {setArticle} from "../../redux/actions/actionCreators";


const mapDispatchToProps= ()=> {
  return {
     setArticle: setArticle,
  }
 }

class HomePage extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      searchTerms: "", 
      articleList: [], 
    }

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
      const filteredArr= this.state.articleList.filter(index=>index.title.toLowerCase().includes(this.state.searchTerms.toLowerCase()))
      return filteredArr
  }

  static navigationOptions = {
    title: 'Web Dev Wiki'
  }

  async componentDidMount()
  {
      this.setState({articleList: await getpages})
  }

  render()
  {
    const {navigate}= this.props.navigation
    const renderPageSelection=({item})=>
    {
      if(item.iconInfo)
      {
        return(
          <Animatable.View animation="fadeInUp">
          <ListItem 
              title={item.title}
              titleStyle={{fontSize: 20, marginLeft:0}}
              leftAvatar={<Icon name={item.iconInfo.name} type={item.iconInfo.type} color={styles.nav.backgroundColor} size={38} iconStyle={{marginRight: 0}}/>}
              onPress={()=> {
                this.props.setArticle(item.title)
                navigate("InfoDisplayPage",{
                  title: item.title, 
                  docsButton: ()=> (
                    <ExternalLink url={item.documentationLink} resourceName="View Docs" type="button"  buttonStyle={{backgroundColor: styles.externalLinkBtn.backgroundColor, marginRight: 20}} icon={<Icon name="file-text" type="font-awesome" color={styles.externalLinkBtn.color} size={20} marginRight={5}/>}/>)
                })
              } }
          >
          </ListItem>
          </Animatable.View>
        )
      }
      else
      {
        return(
          <Animatable.View animation="fadeInUp">
          <ListItem 
              title={item.title}
              titleStyle={{fontSize: 20, marginLeft:0}}
              leftAvatar={<Icon name={"info-circle"} type={"font-awesome-5"} color={styles.nav.backgroundColor} size={38} iconStyle={{marginRight: 0}}/>}
              onPress={()=> {
                this.props.setArticle(item.title)
                navigate("InfoDisplayPage",{
                  title: item.title, 
                  docsButton: ()=> (
                    <ExternalLink url={item.documentationLink} resourceName="View Docs" type="button"  buttonStyle={{backgroundColor: styles.externalLinkBtn.backgroundColor, marginRight: 20}} icon={<Icon name="file-text" type="font-awesome" color={styles.externalLinkBtn.color} size={20} marginRight={5}/>}/>)
                })
              } }
          >
          </ListItem>
          </Animatable.View>
        )
      }
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

export default connect(undefined,mapDispatchToProps())(HomePage)