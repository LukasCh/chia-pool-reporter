import axios from "axios";
import Config from "./../config.js";
const { exec } = require("child_process");

const INTERVAL = 30 * 60 * 1000;
const REPORT_COMMAND = `cd ${Config.chiaPath} && . ./activate && chia farm summary`;

const getReportBody = (callback) => {
  let body = { hash: Config.hash };
  exec(REPORT_COMMAND, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    body.farmingData = stdout;
    callback(body);
  });
};

const report = () => {
  try {
    getReportBody((body) => {
      axios
        .post(`${Config.serverURL}/report`, body)
        .then(function (response) {
          //console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (err) {
    console.log(err);
  }
};

report();
setInterval(() => report(myArgs[0]), INTERVAL);
