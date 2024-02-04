import { Type, type Static } from '@sinclair/typebox';
import mongoose, { Schema } from "mongoose";

const TSubscriptor = Type.Object({
    userId: Type.String(),
    membresiaId: Type.String(),
    startDate: Type.Date(),
    endDate: Type.Date(),
    isActive: Type.Boolean()
})

export type ISubscriptor = Static<typeof TSubscriptor>

const subscriptorSchema = new Schema<ISubscriptor>({
    userId: { type: String, required: true },
    membresiaId: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true}
}, {
    versionKey: false
});

export const Subscriptor = mongoose.model<ISubscriptor>('subscripciones', subscriptorSchema);

