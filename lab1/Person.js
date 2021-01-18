export default class Person {
    constructor(name, words){
        this.name = name;
        this.words = words;
    }
    speak = ( words ) => {
        return console.log(words)
    }
}

