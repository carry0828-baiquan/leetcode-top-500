export default function emojify(message: any, emoji: string): any {
  let emojiArr = emoji.split("");
  let messageArr = message.split("");
  let emojiIndex = 0;
  for (let i = 0; i < messageArr.length; i++) {
    if (messageArr[i] === " ") {
      messageArr[i] = emojiArr[emojiIndex];
      emojiIndex++;
    }
  }
  if (emojiArr === emoji.split("")) {
    return "invalid string";
  }
  if (emojiArr !== emoji.split("")) {
    return messageArr.join("");
  }
  console.log(messageArr);
  return "invalid";
}

emojify("hello world", "😀");
