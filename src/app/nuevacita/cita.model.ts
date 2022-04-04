export class Cita{
    
    constructor(id:number, fecha:string, hora:string, cliente:string, servicio:string, precio:number){
        this.id=id
        this.fecha=fecha
        this.hora=hora
        this.cliente=cliente
        this.servicio=servicio
        this.precio=precio
    }

    id:number=0
    fecha:string=""
    hora:string=""
    cliente:string=""
    servicio:string=""
    precio:number=0
}