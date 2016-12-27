console.log("Reply to @user bot is now starting . . .\n");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
var Answers = [];  // one of these will be te answer added to the Tweet.
  Answers[0] ="That is nice to hear";
  Answers[1] ="I can not stop laughing";
  Answers[2] ="You made my day bro";
  Answers[3] ="Are you retarded?!?!";
  Answers[4] ="I feel like i am only talking to dumbasses";
  Answers[5] ="Whenever I see that post I am going to die a bit more";
  Answers[6] ="You really should think about deleting that post bro";
  Answers[7] ="Wow you really did that for me that is crazy";

listenTweets('Any Twitter ID'); //ID´s can be found on gettwitterid.com

function tweetIt(txt, tweet){
  var tweet = {
    status: txt,
    in_reply_to_status_id: tweet.id_str
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err){
      console.log("ERROR: Failed to tweet post.");
    } else {
      console.log("Successfully tweeted: " + tweet.status + "\n");
    }
  }
}

function listenTweets(id) {

  console.log("looking for tweets with the ID: " + id);
  var stream = T.stream('statuses/filter',{
    follow : id
  });
  stream.on('tweet', tweetEvent);
  function tweetEvent(tweet) {

    console.log('User tweeted: \n');
    console.log("Id:" + tweet.user.id + "\t Username:"+ tweet.user.name + "\t Screenname:" + tweet.user.screen_name + "\t" + tweet.text + "\n");
    var replyto = tweet.user.screen_name;
    var number = Math.floor(Math.random() * 8); // when you add ore sentences to the array also adjust this calculation
    var newTweet = "@" + replyto + ' ' + Answers[number];
    console.log(newTweet);
    tweetIt(newTweet, tweet);

  }
  stream.on('error', function(error) {
      console.log(error);
  });
}
