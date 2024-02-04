import { Type, } from "@sinclair/typebox";
import { Elysia } from "elysia";
import controller from "./controller";

export function routeMembresia(app: Elysia){
    // GET /membresia
    app.get("/membresia", async ({set}) => {
        return await controller.getAllMembresias()
    });
    
    // POST /membresia
    // {
    //     "nombre": "Membresía 1",
    //     "precio": 100,
    //     "descripcion": "Membresía de prueba",
    //     "activa": true
    // }
    app.post("/membresia", async ({body}) => {
        return await controller.createMembresia(body.nombre, body.precio, body.descripcion, body.activa ?? true)
    },{
        body: Type.Object({
            nombre: Type.String(),
            precio: Type.Number(),
            descripcion: Type.String(),
            activa: Type.Optional(Type.Boolean({default: true}))
        }),
    });

    // DELETE /membresia?id=123
    app.delete("/membresia", async ({query}) => {
        return await controller.setActiveFalseMembresia(query.id)
    },{
        query: Type.Object({
            id: Type.String()
        })
    });
}