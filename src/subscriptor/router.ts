import { Type, } from "@sinclair/typebox";
import { Elysia } from "elysia";
import controller from "./controller";

export function routeSubscriptor(app: Elysia){
    // GET /subscriptor
    app.get("/subscriptor", async ({set}) => {
        return await controller.getAllSubscriptores()
    });
    
    // POST /subscriptor
    // {
    //     "userId": "123",
    //     "membresiaId": "123"
    // }
    app.post("/subscriptor", async ({body}) => {
        return await controller.createSubscriptor(body.userId, body.membresiaId)
    },{
        body: Type.Object({
            userId: Type.String(),
            membresiaId: Type.String(),
        }),
    });
}