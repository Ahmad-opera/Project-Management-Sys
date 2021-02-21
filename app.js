const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Set-up .env
require('dotenv').config();

// Initiate middelewares
app.use(express.json());

// Require routes
const adminRoutes = require('./routes/adminRoutes');

// Initiate routes for use
app.use('/api', adminRoutes);

app.get('/', (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, ()=> {
    console.log('DB Connected Successful...!');
    app.listen(3000, () => {
        console.log('App listening on port ' + PORT + '...!');
    });
});
