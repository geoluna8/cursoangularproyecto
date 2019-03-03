export class Empleado {
    public id: number;
    public nombre: string;
    public email: string;  
    public direccion: string;
    public telefono: string;
    public departamento: string; 
    public estaActivo:boolean;
    public estadoCivil: number;


    constructor(id:number, 
        nombre: string,
        email: string, 
        direccion: string, 
        telefono: string, 
        departamento: string,
        estaActivo: boolean,
        estadoCivil: number)
    {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.departamento = departamento;
        this.estaActivo = estaActivo;
        this.estadoCivil = estadoCivil;
    }    
}

export interface Estado_Civil{
    id: number;
    estado: string;
}