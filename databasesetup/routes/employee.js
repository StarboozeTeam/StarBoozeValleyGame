const express = require("express");
const router = express.Router();
const characters = require("../services/employee");

router.get("/", async function (req, res, next) {
    try {
        res.json(await characters.getMultiple(req.query.page));
    } catch (err) {
        console.error('Error while getting employees', err.message);
        next(err);
    }
});

module.exports = router;
