let idCounter = 0;
const articles = [];

const getAllArticles = () => articles;
const getArticle = (id) => articles.find(a => a.id === id);
const createArticle = (title, content) => {
    const newArticle = { id: ++idCounter, title, content };
    articles.push(newArticle);
    return newArticle;
};

const updateArticle = (id, title, content) => {
    const article = getArticle(id);
    if (article) {
        if (title) article.title = title;
        if (content) article.content = content;
    }
    return article;
};

const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === id);
    if (index !== -1) {
        articles.splice(index, 1);
        return true;
    }
    return false;
};

// Seed an initial article
createArticle('hello', 'world');

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};
