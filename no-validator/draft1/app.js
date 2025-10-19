const n = 4;

class dog {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    bark = () => {
        console.log("What's your name? ", this.name, "Woof...woof!");
        return;
    }
}

const tom = new dog("Tommy", "German Shefired");

console.log(tom.name);
console.log(tom.type);
tom.bark();