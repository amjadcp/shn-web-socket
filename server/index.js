const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, `/.env`) });
const cors = require("cors")
const connectDB = require("./utils/connectDB");
const { createUser } = require("./controllers/createUser");
const { createNotify } = require("./controllers/createNotify");
connectDB();

app.set("trust proxy", 1); // trust first proxy


app.use(cors());
app.use(express.json({
	type: ["application/json", "text/plain"],
}));

// routers
app.post('/api/v1/user', createUser)
app.post('/api/v1/notify', createNotify)


app.listen(process.env.PORT, () => console.log("Server Running on " + `${process.env.PORT}`));