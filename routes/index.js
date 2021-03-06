var express = require("express");
var router = express.Router();
var contests = require("../controls/contests");
var problems = require("../controls/problems");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/contribution", (req, res) => {
    res.render("contribution");
});

router.get("/contests", contests.showContests);

router.get("/problems/all", problems.problemSet);

router.get("/problem/:qID", problems.displayProblem);

router.get("/rankings", problems.userRankings);

router.get("/ide", problems.getIde);

router.post("/ide", problems.postIde);

module.exports = router;
