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




borrarContacto(2);
imprimirContacto();
// agregarContacto(nuevoContacto)
// imprimirContacto()
// borrarContacto("ErikCastro")
// // agregarContacto("esteban")
// console.log(listaContactos);