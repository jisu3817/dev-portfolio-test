const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/src/public`));

app.listen(PORT, () => console.log(`opened Express server on ${PORT}`));
