import mongoose from 'mongoose'

const estudiantes = [
    { nombre: 'Pedro', apellidos: 'Mei', edad: 21, curso: 'Backend' },
    { nombre: 'Susana', apellidos: 'Oria', edad: 35, curso: 'ReactJs' },
    { nombre: 'Alex', apellidos: 'Marin', curso: 'ReactJs' },
    { nombre: 'Julio', apellidos: 'Lopez', edad: 28, curso: 'ReactJs' },
    { nombre: 'Felipe', apellidos: 'Rodriguez', edad: 29, curso: 'Angular' },
]

const estudiantesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    edad: { type: Number, required: true },
    curso: { type: String, required: true }
})

// DAO = Data Access Object
const EstudiantesDAO = mongoose.model('estudiantes', estudiantesSchema)

// await mongoose.connect('mongodb://localhost:27017/colegio', {
await mongoose.connect('mongodb+srv://coder:coder@cluster0.yd7kuoh.mongodb.net/colegio', {
    serverSelectionTimeoutMS: 5000
})

console.log('BD conectada')

// Forma 1
for (const estudiante of estudiantes) {
    try {
        await EstudiantesDAO.create(estudiante)
    } catch(err) {
        console.log('Documento no cimple con el Schema')
    }
}

// Forma 2
// await EstudiantesDAO.insertMany(estudiantes)

console.log('Documentos creados!')