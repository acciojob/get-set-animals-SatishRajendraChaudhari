//complete this code
class Animal {
	constructor(species){
	  this.species=species;
}
	get getSpecies(){
	  return this.species;
  }
	makeSound(){
	  console.log('sound...');
  }
}

class Dog extends Animal {
	 bark(){
		console.log('woof');
}
}

class Cat extends Animal{
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
