const express = require("express");
const apiRouter = express.Router();

/**
 * @openapi
 * /health:
 *   get:
 *     description: Health route to make sure server is up
 *     responses:
 *       200:
 *         description: {"Hello": "World"}
 */
apiRouter.get("/health", (req, res) => res.send({ Hello: "World" }));

module.exports = apiRouter;
