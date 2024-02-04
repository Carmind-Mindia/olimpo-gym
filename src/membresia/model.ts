import { Type, type Static } from "@sinclair/typebox"
import mongoose, { Schema } from "mongoose"

export enum DuracionEnum {
	"1 semana",
	"2 semanas",
	"3 semanas",
	"1 mes"
}

//-------------------------------------------------------------------------

const TMembresia = Type.Object({
	id: Type.String(),
	nombre: Type.String(),
	precio: Type.Number(),
	plan_duracion: Type.String(),
	descripcion: Type.String(),
	activa: Type.Boolean(),
})

export type IMembresia = Static<typeof TMembresia>

const membresiaSchema = new Schema<IMembresia>(
	{
		nombre: { type: String, required: true },
		plan_duracion: { type: String, required: true, enum: Object.values(DuracionEnum) },
		precio: { type: Number, required: true },
		descripcion: { type: String, required: false },
		activa: { type: Boolean, default: true },
	},
	{
		versionKey: false,
	}
)

export const Membresia = mongoose.model<IMembresia>("membresia", membresiaSchema)

//---------------------------------------------------------
