import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import rootRouter from "./routes/root";
import dictionaryRouter from "./routes/dictionary";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);
app.use(express.json());
app.use(cors());

app.use("/", rootRouter);
app.use("/api/v1/dictionary", dictionaryRouter);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}...`);
});
