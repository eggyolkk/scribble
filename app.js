const express = require("express")
const mongoose = require("mongoose")
const journalRoutes = require("./routes/journalRoutes")
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')
const { requireAuth } = require('./middleware/authMiddleware')
const cors = require('cors')
const path = require('path')

// set up environment variables
require("dotenv").config()
const PORT = process.env.PORT || 5000;

const API = process.env.NODE_ENV === 'production' ? 'https://scribble-tracker.herokuapp.com/' : 'http://localhost:3000'
console.log(API)

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
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.path = req.path;
    res.header('Access-Control-Allow-Origin', API) // relax same-origin sharing with front-end
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control_Allow_Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS') // allow CORS for the following methods
    next()
})

// authentication endpoints
app.use('/auth', cors({credentials: true, origin: API}), authRoutes)

// journal endpoints
app.use('/journals', cors({credentials: true, origin: API}), journalRoutes);

// user endpoints
app.use('/user', cors({credentials: true, origin: API}), userRoutes)

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('scribble/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'scribble', 'build', 'index.html'))
    })
}

app.use((req, res) => {
    res.status(404).render('dataView', { message: '404 not found' })
});
