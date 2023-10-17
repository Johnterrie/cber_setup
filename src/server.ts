import * as express from "express";
import * as config from "config";
import * as bodyParser from "body-parser";

import connectDB from "../db/connect";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const start = async () => {
  await connectDB(config.get("database.connection"));
  app.listen(config.get("port"), () =>
    console.log(`Listening on port ${config.get("port")}`)
  );
};

start();
