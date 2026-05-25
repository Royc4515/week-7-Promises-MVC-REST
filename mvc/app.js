const express = require('express');
const app = express();
const articleRoutes = require('./routes/articles');

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/api/articles', articleRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
