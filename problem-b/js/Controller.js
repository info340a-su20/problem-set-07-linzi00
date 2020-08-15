"use strict";

import readlineSync from "readline-sync";
import * as model from "./Model";
import * as view from "./View";

export function runSearch() {
  console.log("Here are some tweets by @UW_iSchool");
  view.printTweets(model.getRecentTweets());
  const input = readlineSync.question("Search tweets, or EXIT to quit: ");
  if (input === "EXIT") {
    return;
  }
  view.printTweets(model.searchTweets(input));
}
