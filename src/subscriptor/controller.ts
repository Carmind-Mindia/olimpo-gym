import membresiaController from "../membresia/controller"
import { Subscriptor } from "./model"

// Función para dar de alta un subscriptor
async function createSubscriptor(userId: string, membresiaId: string) {
	//TODO: verificar userId con UserHub

	// Verify membresiaId
	const membresia = membresiaController.getMembresiaById(membresiaId)

	const startDate = new Date()
	const endDate = new Date(startDate)
	endDate.setMonth(endDate.getMonth() + 1)

	const subscriptor = new Subscriptor({
		userId,
		membresiaId,
		startDate,
		endDate,
	})

	// Guardar el documento en la base de datos
	await subscriptor.save()
	return subscriptor
}

async function getAllSubscriptores() {
	const membresias = await Subscriptor.find({ isActive: true })
	return membresias
}

export default { createSubscriptor, getAllSubscriptores }
