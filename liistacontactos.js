let listaContactos = [
    {
        id: 1, nombre: "erik",
        apellido: "castro", telefono:"3124541491", 
        ubicaciones: {ciudad:"bogota", direccion: "chapinero"}
    },
    {
        id: 2, 
        nombre: "daniel", 
        apellido: "castro", telefono:"3224541491", 
        ubicaciones: {ciudad:"bogota", direccion: "chapinero"}
    },
];

function agregarContacto(nuevoContacto){
	listaContactos.push(nuevoContacto)
	return listaContactos
}

function borrarContacto(contactoABorrar){
	let nuevalista = listaContactos.filter((contacto) => contacto.id !== contactoABorrar)
	listaContactos = nuevalista

}

function imprimirContacto(){
	console.log(listaContactos);
}

let nuevoContacto = {
        id: 3, 
        nombre: "ESTEBAM", 
        apellido: "castro", telefono:"3256577788", 
        ubicaciones: {ciudad:"bogota", direccion: "quiroga"}
    }


    function actualizarContacto(id, nuevoNombre, nuevoTelefono) {
        // Encuentra el índice del contacto con el ID dado
        var indice = contactos.findIndex(function (contacto) {
            return contacto.id === id;
        });
    
        // Verifica si se encontró el contacto
        if (indice !== -1) {
            // Actualiza los valores del contacto
            contactos[indice].nombre = nuevoNombre;
            contactos[indice].telefono = nuevoTelefono;
    
            // Puedes realizar acciones adicionales aquí, como enviar los cambios al servidor si es necesario
    
            console.log('Contacto actualizado:', contactos[indice]);
        } else {
            console.log('Contacto no encontrado con el ID:', id);
        }
    }

borrarContacto(2);
imprimirContacto();
// agregarContacto(nuevoContacto)
// imprimirContacto()
// borrarContacto("ErikCastro")
// // agregarContacto("esteban")
// console.log(listaContactos);