import {Component} from "react"
import pagesDisplayArr from "../../shared/data.js"
import {connect} from "react-redux"

const mapStateToProps= (state) => {
  return {
   article: state.article,
  }
}

//every wiki-info page should  be displayed via this component
class InfoDisplay extends Component
{
  constructor(props)
  {
    super(props)
  }

  // sets stack navigator header details, these params are defined and passed in through the homepage component.
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerRight: navigation.state.params.docsButton
  });

  render()
  {
    return(
      // The look and content of the page is defined in shared/data.js
      pagesDisplayArr.filter(index => index.title===this.props.article)[0].view
    )
  }
}

export default  connect(mapStateToProps)(InfoDisplay)