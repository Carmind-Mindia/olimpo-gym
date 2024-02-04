import { Elysia } from "elysia";
import { routeMembresia } from "./membresia/router";
import { routeSubscriptor } from "./subscriptor/router";

// Import the connection file to start the connection
import "./mongodb/connection";

const app = new Elysia()
    .get("/ping", () => "pong");


routeMembresia(app);
routeSubscriptor(app);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
