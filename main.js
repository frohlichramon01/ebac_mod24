function Animal(name, color, age, weight){
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
}


function Dog(breed, name, color, age, weight){
    this.breed = breed;

    Animal.call(this, name, color, age, weight);

    this.woof = function(){
        console.log(this.name + ': woof woof');
    }
}

function Cat(breed, name, color, age, weight){
    this.breed = breed;

    Animal.call(this, name, color, age, weight);

    this.meow = function(){
        console.log(this.name + ': meow meow');
    }
}


const dolce = new Dog('Dolce', 'Brown', 'Can turner', 10, 18);
const hera = new Dog('Hera', 'Brown', 'Can turner', 7, 14);
const gaia = new Dog('Gaia', 'Yellow', 'Can turner', 5, 15);
const soneca = new Cat('Soneca', 'Gray', 'Siamese', 5, 7);

console.log(dolce);
console.log(hera);
console.log(gaia);
console.log(soneca);