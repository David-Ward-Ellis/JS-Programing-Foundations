function banner(message) {
  let horizontal = `+${"-".repeat(message.length + 2)}+`;
  let empty = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontal)
  console.log(empty)
  console.log(`|${message}  |`)
  console.log(empty)
  console.log(horizontal)
}

banner("This is a message")