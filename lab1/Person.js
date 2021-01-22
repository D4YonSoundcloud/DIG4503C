import chalk from 'chalk'

export default class Person {
    constructor(name, words, favoriteColor){
        this.name = name;
        this.words = words;
        this.favoriteColor = favoriteColor;
    }
    speak = ( ) => {
        return console.log(chalk[`${this.favoriteColor}`](this.words))
    }
}

