import { Membresia } from "./model"

// Función para dar de alta una membresía
async function createMembresia(nombre: string, precio: number, descripcion: string, activa: boolean) {
	
    // Crear un nuevo documento de membresía
	const membresia = new Membresia({
		nombre,
		precio,
		descripcion,
		activa,
	})

	// Guardar el documento en la base de datos
	await membresia.save()
	return membresia
}

// Función para dar de baja una membresía
async function setActiveFalseMembresia(_id: string) {
	// Buscar membresia por _id
	const membresia = await Membresia.findById(_id)

	// Si la membresía no existe, lanzar un error
	if (!membresia) {
		throw new Error("La membresía no existe")
	}

	// Dar de baja la membresía
	membresia.activa = false

	// Guardar el documento en la base de datos
	await membresia.save()
}

// Función para listar las membresías
async function getAllMembresias() {
	// Buscar todas la membresias activas
	const membresias = await Membresia.find({ activa: true })

	return membresias
}

async function getMembresiaById(_id: string) {
	const membresia = await Membresia.findById(_id)
	if (!membresia) {
		throw new Error("La membresía no existe")
	}
	return membresia
}

export default { createMembresia, setActiveFalseMembresia, getAllMembresias, getMembresiaById }
