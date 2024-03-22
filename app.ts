import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Routes } from "./routs/route";
import {Database} from './db/_db'
import { InitializationHandler } from "./handler/initialization.handler";
class App {
  public app: express.Application;
  public route: Routes | undefined;

  private corsOptions: cors.CorsOptions = {
    origin: "*",
  };

  constructor() {
    dotenv.config();
    this.app = express();
    this.BuildApp();
    this.connectToDB()
  }

  private BuildApp() {
    this.app.set("trust proxy", 1);
    this.app.use(
      express.json({
        limit: "20mb",
      })
    );
    this.app.use(cors(this.corsOptions));
    this.app.use(
      express.urlencoded({
        extended: true,
        limit: "20mb",
      })
    );
    this.app.use(cors(), express.urlencoded({ extended: true }));
    this.app.use(
      cors(),
      express.urlencoded({ extended: true }),
      express.json({ limit: "500mb" })
    );

    this.route = new Routes();
    this.route.Routes(this.app);
  }

  private async connectToDB(){
    await new Database().connect()
    new InitializationHandler()
  }
}

export default new App().app;
