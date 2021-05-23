import React,{Component} from 'react';
import {updateTweet,getTweets} from "../../store/actions/tweetsActions";
import {connect} from 'react-redux';

class Tweet extends Component{

	render() {
		
		//get the tweet to display
		const {tweets,updateTweet,getTweets} = this.props;

		if(tweets.length == 0){
			getTweets();
		}

		let tweet;

		for(let x = 0; x < tweets.length;x++){
			if(tweets[x].sentiment === ""){
				tweet = tweets[x];
			}
		}

		

		const setPositiveSentiment = (e) => {
			e.preventDefault();
			if(tweet){
				tweet.sentiment = "POS"
				updateTweet(tweet);
			}
			
		}

		const setNegativeSentiment = (e) => {
			e.preventDefault();
			if(tweet){
				tweet.sentiment = "NEG"
				updateTweet(tweet);
			}
		}

		const setNuetralSentiment = (e) => {
			e.preventDefault();
			if(tweet){
				tweet.sentiment = "NUE"
				updateTweet(tweet);
			}
		}



		

		return(
			<div className="container">
				<br/>
				<br/>
				<br/>
				 <div className="row">
				    <div className="col s12 m10">
				      <div className="card">
				        
				        <div className="card-content">
				          <span className="blue-text text-darken-2 card-title">Assign a sentiment on this tweet!!</span>
						  <br/>

				          <p>{tweet && tweet.content}</p>
				        </div>
				        <div className="card-action">
				           <a onClick={setPositiveSentiment} className="blue darken-2 white-text waves-effect waves-teal btn-flat">Positive</a>
				           <a onClick={setNegativeSentiment} className="red darken-2 white-text waves-effect waves-teal btn-flat">negative</a>
				           <a onClick={setNuetralSentiment} className="green darken-2 white-text waves-effect waves-teal btn-flat">nuetral</a>
				        </div>
				      </div>
				    </div>
				  </div>


			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tweets: state.tweets
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateTweet: (tweet) => dispatch(updateTweet(tweet)),
		getTweets: () => dispatch(getTweets()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Tweet);
