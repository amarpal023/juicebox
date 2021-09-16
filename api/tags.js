const express = require('express');
const tagsRouter = express.Router();

const { getAllTags } = require("../db");


tagsRouter.get('/', async (req, res) => {
    const posts = await getAllTags();

    res.send({
        posts
    });
});

module.exports = tagsRouter;