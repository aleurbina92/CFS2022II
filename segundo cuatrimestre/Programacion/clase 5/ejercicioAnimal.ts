class Animal {
    public name = string;

    public constructor(name : string){
        this.name = name
    }

    public makeSound(){

    }
}

class Dog extends Animal {
   public constructor(name : string){
        super(name);
    }

    public makeSound(): void{
        console.log("wuff wuff");
    }
}

class Cat extends Animal{
    public constructor(name : string){
        super(name);
    }

    public makeSound(): void{
        console.log("meow meow");
    }
}
