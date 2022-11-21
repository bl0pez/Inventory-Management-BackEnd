require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const handleError = require('./middleware/handleError');


const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));
//Middlewares
app.use(express.json());

app.use("/api/users", require("./routes/userRoute"));

//Error Middleware
app.use(handleError);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));