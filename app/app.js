/*global prompt:true*/

var prompt = require('sync-prompt').prompt;

var question = prompt('(d)og, (c)at, (h)orse or (q)uit? ');
var dogs = [], cats = [], horses = [], people = [];

var person1 = {name:'bob', age:10, pets:[]};
var person2 = {name:'sam', age:5, pets:[]};
var person3 = {name:'jill', age:7, pets:[]};

people.push(person1, person2, person3);

while(question !== 'q'){
  if (question  === 'd'){
    var name = prompt('Dog Name: ');
    var age = prompt('Dog Age: ');
    var breed = prompt('Dog Breed: ');
    age = parseInt(age);
    var dog = {name:name, age:age, breed:breed};
    dogs.push(dog);
  }else if (question === 'c'){
   var name = prompt('Cat Name: ');
   var color = prompt('Cat Color: ');
   var gender = prompt('Cat Gender: ');
   var cat = {name:name, color:color, gender:gender};
   cats.push(cat);
  }else if (question === 'h'){
    var name = prompt('Horse Name: ');
    var weight = prompt('Horse Weight: ');
    var eyeColor = prompt('Horse Eye Color: ');
    weight = parseInt(weight);
    var horse = {name:name, weight:weight, eyeColor:eyeColor};
    horses.push(horse);
  }
  question = prompt('(d)og, (c)at, (h)orse or (q)uit? ');
}

question = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
while(question !== 'q'){
  for(var i = 0; i < people.length; i++){
    if(people[i].name[0] === question){
    var client = people[i];
    break;
    }
  }
var animals;
console.log('Client:', client);
var choice = prompt('What type of Pet? (d)og, (c)at, (h)orse' );
switch(choice){
  case 'd':
    console.log('Dogs: ',dogs);
    animals = dogs;
    break;
  case 'c':
    console.log('Cats: ',cats);
    animals = cats;
    break;
  case 'h':
    console.log('Horses: ',horses);
    animals = horses;
}
 var name = prompt('What is the name of the animal you want to adopt? ');

 for(i=0; i< animals.length; i++){
  if(animals[i].name === name){
    var animal = animals[i];
    var index = i;
    break;
  }
 }

  console.log('Animal:', animal);

  animals.splice(index, 1);//this line of code removed the animal from the array
  client.pets.push(animal);
  console.log('After adoption:', client);
  console.log('Animals array:', animals);

  question = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
 }






console.log('Dogs: ',dogs);
console.log('Cats: ',cats);
console.log('Horses: ',horses);

