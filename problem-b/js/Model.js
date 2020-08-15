"use strict";

import allTweets from "./uw_ischool_tweets";

const reducedTweets = allTweets.map((tweet) => ({
  text: tweet.text,
  timestamp: Date.parse(tweet.created_at),
}));

export function getRecentTweets() {
  const sortedTweets = reducedTweets.sort(
    (t1, t2) => t2.timestamp - t1.timestamp
  );
  return sortedTweets.slice(0, 5);
}

export function searchTweets(term) {
  return reducedTweets.filter((tweet) =>
    tweet.text.toLowerCase().includes(term.toLowerCase())
  );
}
