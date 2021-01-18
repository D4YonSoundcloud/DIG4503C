//install node to easily run javascript files in terminal

import Person from './Person.js';

let words = "Yo I'm Matt Day, I'm currently a fulltime software developer at Red Meters where I get to use VueJs all day, I Didn't like react when I tried it, but I did not have any framework experience, I am ready to try React again! I would love to say I truly have more experience beyond a few projects when I just followed tutorials"
let person = new Person('D4Y', words );

//console.logs the words give to the person object
person.speak(person.words);

