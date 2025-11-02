"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./Auth/index");
const index_2 = require("./Products/index");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/auth", index_1.authHandler);
app.use("/api/v1/products", index_2.productHandler);
app.listen(4000, () => {
    console.log("Server running on the port 4000");
});
//# sourceMappingURL=index.js.map