require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));