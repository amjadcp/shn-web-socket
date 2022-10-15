const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, `/.env`) });
const cors = require("cors")
const connectDB = require("./utils/connectDB");
const { createUser } = require("./controllers/createUser");
connectDB();

const whitelist = [''];

app.set("trust proxy", 1); // trust first proxy

const corsOptions = {
	// eslint-disable-next-line consistent-return
	origin(origin, callback) {
		if (!origin) { // for mobile app and postman client
			return callback(null, true);
		}
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
			corsOptions} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

app.use(cors());
app.use(express.json({
	type: ["application/json", "text/plain"],
}));

// routers
app.post('/api/v1/user', createUser)


app.listen(process.env.PORT, () => console.log("Server Running on " + `${process.env.PORT}`));