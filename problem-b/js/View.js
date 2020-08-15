"use strict";

export function printTweets(tweets) {
  if (tweets.length === 0) {
    console.log("No tweets found");
  } else {
    tweets.forEach((tweet) => {
      console.log(
        `- "${tweet.text}" (${new Date(tweet.timestamp).toLocaleString(
          "en-US"
        )})`
      );
    });
  }
}
