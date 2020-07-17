var express = require("express");
var router = express.Router();
const shelljs = require("shelljs");
const util = require("util");
const execAsync = util.promisify(shelljs.exec);
const _ = require("lodash");

router.get("/search", function (req, res) {
  const query = req.query.q;
  let results = [];
  execAsync(`npm search ${query} --json`, {
    silent: true,
  }).then((data) => {
    results = JSON.parse(data).map((o) => {
      return { name: o.name, description: o.description };
    });
    return res.json(results);
  });
});

module.exports = router;
