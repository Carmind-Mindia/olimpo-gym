import { Elysia } from "elysia";
import { routeMembresia } from "./membresia/router";
import { routeSubscriptor } from "./subscriptor/router";

// Import the connection file to start the connection
import "./mongodb/connection";

const app = new Elysia()
    .get("/ping", () => "pong");

app.onError(({code, error, set}) => {
  set.status = 500;
  error = error || "Internal Server Error";
  console.error(`Error ${code}: ${error}`);
})

routeMembresia(app);
routeSubscriptor(app);

app.listen(Bun.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
