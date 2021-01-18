//install node to easily run javascript files in terminal

import Person from './Person.js';

//ignore all this, maybe if the next lab is to incorporate with HTML it could be helpful
//i'ma still format the speak() function well so it still looks somewhat decent in terminal

//create body and div to house our text
// document.createElement("body");
//
// let body = document.getElementsByTagName('body');
// let mainDiv = document.createElement('div');
// let name = document.createElement('h3')
// let text = document.createElement('p')
//
// //append elements to each other
// body.append(mainDiv)
// mainDiv.append(name)
// mainDiv.append(text)

//kinda had aha moment while coding what could be the assignment and actually stumbled upon a super rudimentary script system
//so i pass in the index of the words dialog to the object, so I could do easy sequential order stuff
let Omega = '\u03A9';

let dialogs = {
    'D4Y':{
        sentences: [
            "Yo I'm Matt Day, I'm currently a full-time software developer at Red Meters where " +
            "I get to use VueJs all day, I Didn't like react when I tried it, but I did not have any framework " +
            "experience, I am ready to try React again! I would love to say I truly have more experience beyond a " +
            "few projects when I just followed tutorials!",
            'ah...yeah... :' + ')',
            '.',
            '..',
            '...',
            ' ..',
            '  .',
            '   .',
            '    .',
            '     .',
            '      .',
            '       .',
            '        .    .',
            '         .   .',
            '          .  .',
            '           . .',
            '            ..',
            '             ..',
            '              ..   |',
            '               ..  |',
            '                .. |',
            '                 ..|',
            '                  .|',
            '                   |',
            '                   |: -dude ',
        ]
    },
    'Ms.Winter': {
        sentences: [
            "I-I didn't ask...",
            'I got other students to grade'
        ]
    }
}
let people = {
    'D4Y': new Person('D4Y', dialogs['D4Y'].sentences ),
    'Ms.Winter': new Person('Ms.Winter', dialogs['Ms.Winter'].sentences)
}

//conversation is a function that...displays the conversations
let conversation = ( people, animationTime ) => {
    setTimeout(() => { people['D4Y'].speak(0); }, 500);
    setTimeout(() => { people['Ms.Winter'].speak(0) }, 3000);
    setTimeout(() => { people['D4Y'].speak(1) }, 5000);
    setTimeout(() => { people['Ms.Winter'].speak(1) }, 7500);
    setTimeout(() => { animation(people['D4Y'], animationTime) }, 9000);

}

let animation = ( strings, animationTime ) => {
    setTimeout(() => { strings.speak(2) }, animationTime * 1);
    setTimeout(() => { strings.speak(3) }, animationTime * 2);
    setTimeout(() => { strings.speak(4) }, animationTime * 3);
    setTimeout(() => { strings.speak(5) }, animationTime * 4);
    setTimeout(() => { strings.speak(6) }, animationTime * 5);
    setTimeout(() => { strings.speak(7) }, animationTime * 6);
    setTimeout(() => { strings.speak(8) }, animationTime * 7);
    setTimeout(() => { strings.speak(9) }, animationTime * 8);
    setTimeout(() => { strings.speak(10) }, animationTime * 9);
    setTimeout(() => { strings.speak(11) }, animationTime * 10);
    setTimeout(() => { strings.speak(12) }, animationTime * 11);
    setTimeout(() => { strings.speak(13) }, animationTime * 12);
    setTimeout(() => { strings.speak(14) }, animationTime * 13);
    setTimeout(() => { strings.speak(15) }, animationTime * 14);
    setTimeout(() => { strings.speak(16) }, animationTime * 15);
    setTimeout(() => { strings.speak(17) }, animationTime * 16);
    setTimeout(() => { strings.speak(18) }, animationTime * 17);
    setTimeout(() => { strings.speak(19) }, animationTime * 18);
    setTimeout(() => { strings.speak(20) }, animationTime * 19);
    setTimeout(() => { strings.speak(21) }, animationTime * 20);
    setTimeout(() => { strings.speak(22) }, animationTime * 21);
    setTimeout(() => { strings.speak(23) }, animationTime * 22);
    setTimeout(() => { strings.speak(24) }, animationTime * 28);
}

conversation(people, 100)

