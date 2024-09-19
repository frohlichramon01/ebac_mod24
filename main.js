function Animal(name, color, age, weight){
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
}


function Dog(breed){
    this.breed = breed;
}

function Cat(breed){
    this.breed = breed;
}


const dolce = new Dog('Dolce', 'Brown', 'Can turner', 10, 18);
const hera = new Dog('Hera', 'Brown', 'Can turner', 7, 14);
const gaia = new Dog('Gaia', 'Yellow', 'Can turner', 5, 15);
const soneca = new Cat('Soneca', 'Gray', 'Siamese', 5, 7);