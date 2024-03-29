import express from "express";
import routes from "./routes";

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.use("/api", routes);

export default app;
