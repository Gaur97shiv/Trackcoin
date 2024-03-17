const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(cookieParser());
app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    method: ["POST", "GET"],
    credentials: true
  }
));

app.use(express.json({ limit: "50mb" }));
app.use(router);
dbConnect();
app.use("/storage", express.static("storage"));
app.use(errorHandler);
app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));
