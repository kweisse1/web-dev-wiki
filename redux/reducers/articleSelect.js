const articleSelectReducer = (state="",action) =>
{
    switch(action.type)
    {
        case "SET_ARTICLE": 
        state= action.title; 
        return state;
        default: 
        return state;
    }
}

export default articleSelectReducer