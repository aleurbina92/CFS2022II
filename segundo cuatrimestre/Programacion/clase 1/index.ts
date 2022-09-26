class Animal { 
    cantidadDepatas: number;
    nombre: string;

        mostrarInfo(){
            console.log("la info es:");
        }
        constructor(cantidadDePatas:number,nombre:string){
            cantidadDePatas = cantidadDePatas
            this.cantidadDepatas = cantidadDePatas;
            this.nombre = nombre;
        }
}

let araña = new Animal(8,"tarantula");
console.log(araña);