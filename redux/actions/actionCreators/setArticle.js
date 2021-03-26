import * as actionTypes from "../actionTypes"
const setArticle = (title) =>
{
    {
        return {
            type: actionTypes.SET_ARTICLE, 
            title: title
        }
    }
}

export default setArticle