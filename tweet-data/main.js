const csv =  require("csv-parser");
const fs = require("fs");
const axios = require("axios");

const post_url = `http://localhost:8000/tweetsapi/create/tweet/`;
const results  = [];

fs.createReadStream("tweets.csv").pipe(csv({})).on('data',(data) => {
		results.push(data)
	}).on('end',async () => {
		console.log('posting data....');
		for(let x = 0 ; x < results.length;x++){

			const key = Object.keys(results[x])[5];
			const tweet = results[x][key];
			

			await axios.post(post_url, {
			    content: tweet,
			    sentiment: "",
			    unique_id: ""
			})
			.then((response) => {
			  console.log("tweet added");
			}, (error) => {
			  console.log(error);
			});


		}
	})




																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				