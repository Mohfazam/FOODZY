import express from "express"
import cors from "cors"

import { authHandler } from "./Auth/index";
import { productHandler } from "./Products/index";
import { feedBackHandler } from "./Feedback";
import { ordersHandler } from "./Order/index";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authHandler);
app.use("/api/v1/products", productHandler);
app.use("/api/v1/feedback", feedBackHandler);
app.use("/api/v1/order", ordersHandler);

app.listen(4000, () => {
    console.log("Server running on the port 4000");
});