const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');



const app = express();






const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server is Listening on port ${port}`);
})
