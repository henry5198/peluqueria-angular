export class Citadb{
    constructor(id:number, fecha:string, hora:string, id_cliente:number, id_servicio:number, atendido:boolean){
        this.id=id
        this.fecha=fecha
        this.hora=hora
        this.id_cliente=id_cliente
        this.id_servicio=id_servicio
        this.atendido=atendido
    }

    id:number=0
    fecha:string=""
    hora:string=""
    id_cliente:number=0
    id_servicio:number=0
    atendido:boolean=false
}