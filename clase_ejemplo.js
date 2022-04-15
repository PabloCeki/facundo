
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log('Hola soy ',this.nombre)
    }
    miEdad(){
        console.log('Tengo ',this.edad)
    }
    cambiarEdad(edad){
        this.edad = edad
    }
}

const facundo = new Persona('Facundo Zahra',24)
facundo.miEdad()
facundo.cambiarEdad(25)
facundo.miEdad()

