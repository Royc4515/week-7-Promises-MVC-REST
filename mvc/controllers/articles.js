const Article = require('../models/articles');

exports.getAllArticles = (req, res) => {
    res.json(Article.getAllArticles());
};

exports.getArticleById = (req, res) => {
    const id = parseInt(req.params.id);
    const article = Article.getArticle(id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

exports.createArticle = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' });
    const newArticle = Article.createArticle(title, content);
    res.status(201).location(`/api/articles/${newArticle.id}`).end();
};

exports.updateArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;
    const updated = Article.updateArticle(id, title, content);
    if (!updated) return res.status(404).json({ error: 'Article not found' });
    res.json(updated);
};

exports.deleteArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = Article.deleteArticle(id);
    if (!deleted) return res.status(404).json({ error: 'Article not found' });
    res.status(204).send();
};
