//I decided to use import over require() since import is actually part of ES6
// while require() is a built in method from nodeJS
import Matt from './Matt.js'

let d4y = new Matt('matt', "Hey! I'm Matt Day", 'red')

d4y.speak()

