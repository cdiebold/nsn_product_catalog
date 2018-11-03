const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOOSTNAME || 'localhost';
app.listen(port, host, () => console.log(`Listening on port ${port}`));
