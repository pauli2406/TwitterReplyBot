<h1>TwitterReplyBot</h1> by mpochert

JavaScript Stream Bot for Twitter using the Twitter API

<b>WARNING: ABUSING THIS WILL RESULT IN RESTRICTION FROM PERFORMING WRITE ACTIONS THROUGH THE API</b>

<b>Requirements:</b>
-ttezel's Twitter API Client for node 'twit'(https://github.com/ttezel/twit).

-node JavaScript runtime environment: https://nodejs.org/en/


<b>Install:</b>
For node and the Twit CLient I refer to the Video from Daniel Shiffman 
https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV

SpecificUserReplyBot.js

<b>Functionality:</b>
This bot allows you to follow an specific User. Whenever he is going to Tweet something, you are going to notice that und automatically write an Tweet as response. The possible answers are stored in an Array, so you can change it to whatever you want. 

<b>How to run the program:</b>

1) Make sure that you've correctly configured your Twitter Keys and node.

2) Modify the program by changing listenTweet('any TwitterId') to any ID you want. YOu can find them on gettwitterid.com

3) Customize the possible Answers by changing the content of the Array Answers

4) After that just run the bot via node SpecificUserReplyBot.js in your Terminal and Have Fun.


