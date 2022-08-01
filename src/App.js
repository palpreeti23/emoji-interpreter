import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😕": "Confused face",
  "😨": "Fearful face",
  "😭": "Loudly crying face",
  "😞": "sad",
  "😃": "Smiley",
  "😆": "Laughing",
  "🙂": "Slightly smiling face",
  "🙃": "Upside down face",
  "😉": "Wink",
  "😊": "Blush",
  "😇": "Innocent",
  "😍": "Heart eyes",
  "😋": "Yum",
  "😑": "Expressionless",
  "🤔": "Thinking face",
  "😛": "Stuck out tongue",
  "😐️": "Neutral face",
  "🤫": "Shushing face",
  "🤗": "Hugging face",
  "🤐": "Zipper mouth face",
  "🤑": "Money mouth face",
  "😒": "Unamused face",
  "🤥": "Lying face",
  "😴": "Sleeping face",
  "🤧": "Sneezing face",
  "🥳": "Partying face"
};

var emojisWeKnow = Object.keys(emojiDictionary);
console.log(emojisWeKnow);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't hve this emoji in our dadabase";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji-Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="meaning"> {meaning}</div>

      <h3> click on any emoji (emojis we know) </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} className="emojis">
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
