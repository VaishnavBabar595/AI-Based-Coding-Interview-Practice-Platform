const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const routes = require("./routes/routes");
const aiRoutes = require("./ai/ai");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("AI Coding Interview Platform API");
});

app.listen(5001, () => {
  console.log("Server running on port 5000");
});