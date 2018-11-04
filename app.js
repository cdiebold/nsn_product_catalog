const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contactRoutes = require('./routes/contact');
const homeRoute = require('./routes/index');
const productRoutes = require('./routes/products');
const quoteRoutes = require('./routes/quote');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRoute);
app.use(contactRoutes);
app.use(productRoutes);
app.use(quoteRoutes);

// must be the last routes defined
app.use((req,res,next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});
const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost';
app.listen(port, host, () => console.log(`Listening on port ${port}`));

module.exports = app;
