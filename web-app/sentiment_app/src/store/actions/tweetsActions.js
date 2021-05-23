import axios from 'axios';


export const updateTweet = (tweet) => {
	return async (dispatch, getState) => {
		//make call to api

		const url = `http://localhost:8000/tweetsapi/update/tweet/${tweet.unique_id}/`;

		await axios.post(url, tweet)
		.then((response) => {
		  //console.log(response.data);
		}, (error) => {
		  console.log(error);
		});

		dispatch({type:'UPDATE_TWEET',tweet})
	}
};


export const getTweets = () => {
	return async (dispatch, getState) => {
		//make call to api
		
		const url = `http://localhost:8000/tweetsapi/tweet`;
		let tweets = [];
		await axios.get(url).then(response => {
			tweets = response.data;
		});


		dispatch({type:'SET_TWEETS',tweets})
	}
};