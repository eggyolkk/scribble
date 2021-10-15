const express = require("express")
const mongoose = require("mongoose")
const journalRoutes = require("./routes/journalRoutes")

// set up environment variables
require("dotenv").config()
const PORT = process.env.PORT || 5000;

// connect to mongodb
const dbURI = 'mongodb+srv://ella:GciP6rOhx9uxqyhd@scribble-db.d09rd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT))
    .catch((err) => console.log(err));

// create express app
const app = express()

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
//app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.path = req.path;
    next()
})

// routes
app.use('/journals', journalRoutes);

app.use((req, res) => {
    res.status(404).render('dataView', { message: '404 not found' })
});
