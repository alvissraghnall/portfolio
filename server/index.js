const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({message: "Pray for Paris"});
});


app.listen(PORT, () => {
  console.log(`Portfolio server currently listening on port ${PORT}`);
});

