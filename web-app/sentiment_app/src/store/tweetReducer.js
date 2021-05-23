
const initState = {
	tweets:[]
}

const tweetReducer = (state =initState , action) => {

	if(action.type == "UPDATE_TWEET"){
		return {
			tweets:[...state.tweets,action.tweet]
		};
	}else if(action.type == "SET_TWEETS"){

		return {
			tweets : action.tweets
		}
	}
	return state;
}


export default tweetReducer;