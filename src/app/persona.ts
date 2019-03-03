export class Personas {
    public nombre: string;
    public apellidos: string;
    public email: string;  
    public telefono: string;
    public ciudad: string; 
    public pais: string;


    constructor( 
    nombre: string,
    apellidos: string,
    email: string,  
    telefono: string,
    ciudad: string, 
    pais: string)
    {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.pais = pais;
    }    
}