import { Type, type Static } from '@sinclair/typebox';
import mongoose, { Schema } from "mongoose";

const TMembresia = Type.Object({
    id: Type.String(),
    nombre: Type.String(),
    precio: Type.Number(),
    descripcion: Type.String(),
    activa: Type.Boolean()
})

export type IMembresia = Static<typeof TMembresia>

const membresiaSchema = new Schema<IMembresia>({
    nombre: { type: String, required: true },
    // duracion: { type: Number, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: false },
    activa: { type: Boolean, default: true}
}, {
    versionKey: false
});

export const Membresia = mongoose.model<IMembresia>('membresia', membresiaSchema);

