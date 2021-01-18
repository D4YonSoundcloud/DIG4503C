export default class Person {
    constructor(name, words){
        this.name = name;
        this.words = words;
    }
    speak = ( index ) => {
        return console.log(
            `< ---- ${this.name} ---- : "${this.words[index]}" `
        )
    }
}

