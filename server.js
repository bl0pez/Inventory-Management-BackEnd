require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');



const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/userRoute"));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));