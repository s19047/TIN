var fs = require("fs");

//Provide directory:
const dir = "."; //current directory
var actionDone = {}; // to prevent multiple printing

fs.watch(dir, (eventType, filename) => {
  if (eventType === "change") {
    if (filename) {
      //to prevent it from printing multiple times:
      var path = "./" + filename;
      var stats = fs.statSync(path);
      let seconds = +stats.mtime;
      if (actionDone[filename] == seconds) return;
      actionDone[filename] = seconds;

      //actual implementation starts here:
      console.log(
        `---------------------------------------------------------------
        filename: ${filename} has been modified, here is the content: \n`
      );

      fs.readFile(filename, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data.toString());
        }
      });
    } else {
      console.log("filename not provided");
    }
  }
});
