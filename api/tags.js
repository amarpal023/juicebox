const express = require('express');
const tagsRouter = express.Router();

const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /tags");
  
    next();
});

tagsRouter.get('/', async (req, res) => {
    const posts = await getAllTags();

    res.send({
        posts
    });
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params;
    try {
        const postsByTag = await getPostsByTagName(tagName);
        res.send({posts: postsByTag});
    } catch ({ name, message }) {
        next({ name, message });
    }
});

module.exports = tagsRouter;