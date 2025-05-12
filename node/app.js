const fs = require("fs");
const userName = "김승구";
fs.writeFile("user-data-.txt", `name: ${userName}`, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("완료");
});
