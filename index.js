const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

require("./config/db.js").connectDB();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());




// catch any other request
app.use("*", (req, res)=> {
    res.send("<pre>API is running :)</pre>")
})


const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is Listening on port ${port}`);
})
