import express from "express";
import cors from "cors";
import userRoutes from "./routes/UserRoutes.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.usersPath = "/api/users";

    // ejecucion del metodo middlewares()
    this.middlewares();
    // ejecucion del metodo routes()
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    // lectura y parseo del body
    this.app.use(express.json());

    this.app.use(express.static("src/public"));
  }

  routes() {
    this.app.use(this.usersPath, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => console.log(`server on ${this.port}`));
  }
}
