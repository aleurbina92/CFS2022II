class Tierra {
    public continentes = string;

    public constructor(continentes:string){
        this.continentes = continentes
    
        console.log("los continentes son: America, Europa, Asia, Africa, Oseania y Antartida");
    }
   
}


class biomas extends Tierra{
    public constructor (continentes = string){
        super(continentes);
    console.log("los biomas son: Selva, llanuras, montañas, lagos, oceanos, rios,bosques,praderas y pantanos");
    }
}
