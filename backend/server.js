const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000", // Specify the origin of your frontend
  methods: ["POST", "GET"],
  credentials: true
}));


app.use(express.json({ limit: "50mb" }));
app.use(router);
dbConnect();
app.use("/storage", express.static("storage"));
app.use(errorHandler);

app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));
