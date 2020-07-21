const express = require("express");
const router = express.Router();
const _ = require("lodash");
const opts = {
  url: "https://skimdb.npmjs.com/registry",
  requestDefaults: { timeout: "60000" },
};
const npm_registry = require("nano")(opts);

const limit = 200;

router.get("/crawl", async (req, res) => {
  try {
    console.log("Crawler starts");
    const info = await npm_registry.info();
    console.log(info);
    let total = info.doc_count;
    let totalPages = Math.ceil(total / limit);
    console.log(`Total documents: ${total}`);
    console.log(`Total pages: ${totalPages}`);
    let page = _.random(1, totalPages);
    console.log(`Page: ${page}`);
    const list = await npm_registry.list({
      include_docs: true,
      limit: limit,
      skip: (page - 1) * limit,
    });
    list.rows.map((doc) => {
      console.log(doc.doc.name);
      const job = {
        package_name: doc.doc.name,
      };
    });
    res.status(200).json({
      total,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
