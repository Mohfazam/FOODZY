"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersHandler = void 0;
const express_1 = require("express");
exports.ordersHandler = (0, express_1.Router)();
exports.ordersHandler.get("/health", (req, res) => {
    res.status(200).json({
        Message: "Orders end Point up and running"
    });
});
//# sourceMappingURL=index.js.map