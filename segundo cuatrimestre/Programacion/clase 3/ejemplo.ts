class Ejemplo {

    private atributo : number;
    
    public constructor(atributo : number){
    
        this.atributo = atributo;
    
     }
    
    
    public getAtributo() {
        
        return this.atributo;
     }
    
    }
    
    
    
    let objeto = new Ejemplo (5);
    console.log(objeto.getAtributo())