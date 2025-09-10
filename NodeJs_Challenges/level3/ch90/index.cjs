const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerDoc = {
  openapi: "3.0.0",
  info: { title: "API", version: "1.0.0" },
  paths: {
    "/health": {
      get: {
        responses: {
          200: { description: "ok" }
        }
      }
    }
  }
};

const app = express();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(3000, () => console.log("Server running at http://localhost:3000/docs"));
