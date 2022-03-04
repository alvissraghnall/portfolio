const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');
const router = require('./router');

//app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "../client/static")));
app.use(express.urlencoded({
  extended: true
}));
app.use('/', router);



app.listen(PORT, () => {
  console.log(`Portfolio server currently listening on port ${PORT}`);
});

