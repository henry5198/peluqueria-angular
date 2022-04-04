export class Cliente {
    constructor(id: string, nombre: string, apellido: string, genero: string, edad: number, celular: string, email: string, direccion: string){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.genero=genero
        this.edad=edad
        this.celular=celular
        this.email=email
        this.direccion=direccion
    }

    

    id: string = ""
    nombre: string = ""
    apellido: string = ""
    genero: string = ""
    edad: number = 0
    celular: string = ""
    email: string = ""
    direccion: string = ""
}