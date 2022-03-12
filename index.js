const express = require("express");
const app = express();

// JSON parser
app.use(express.json());

// Logging middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// Cors
const cors = require("cors");
app.use(cors());

// Autogenerate apidocs from comments
// Fast-API kind of has a really cool version of this
// So I want to try it out in node
// Already is more work than I thought it would be 😬
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerOptions = {
  definition: { openapi: "3.0.0" },
  info: { title: "United House Productions" },
  apis: ["./routes/index.js"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Use apiRouter
app.use("/api", require("./routes"));

// Serve static files
const path = require("path");
app.use(express.static(path.join(__dirname, "build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
