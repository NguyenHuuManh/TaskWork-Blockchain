"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = server;
// "start": "tsc && nodemon --exec  node dist/server.js"
//# sourceMappingURL=index.js.map