const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/check-payment", (req, res) => {
  res.json({ paid: true, amount: 100 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
