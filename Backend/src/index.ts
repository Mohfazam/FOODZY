import express from "express"
import cors from "cors"

import { authHandler } from "./Auth/index";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authHandler);

app.listen(4000, () => {
    console.log("Server running on the port 4000");
});