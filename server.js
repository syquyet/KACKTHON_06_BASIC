import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { route } from "./src/routes/index.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
route(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`xin chào http://localhost:${PORT}`);
});
