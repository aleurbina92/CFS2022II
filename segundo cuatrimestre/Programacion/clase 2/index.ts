class Raza {
    colorDePiel: String;
    poderDePelea: number;

    mostrarInfo(){
        console.log("su nivel de pelea es:");
    }

    constructor(colorDePiel: string, poderDePelea: number){
        poderDePelea = poderDePelea	
        this.poderDePelea = poderDePelea;
        this.colorDePiel = colorDePiel;
    }

}

let orco = new Raza("verde",40);
console.log(orco);