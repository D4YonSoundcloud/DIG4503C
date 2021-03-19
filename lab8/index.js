import Express from 'express';
const App = Express();
const port = 3010;
import fs from 'fs';

const fileContents = fs.readFileSync('database.json');

let dataBase = JSON.parse(fileContents);

//I personally prefer to use the Object['key'] syntax to access key values of params
App.get('/employees/:name', (req, res) => {

	let result = {"error":"not available"}

	dataBase.forEach((value) => {
		if(req.params.name === value.name){
			result = value
		}
	})

	res.json(result);
})

App.get('/ages/:number', (req,res) => {
	let result = {"error":"not available"}

	dataBase.forEach((value) => {
		//use parseFloat to turn string to number so we can use the strictly equals operator
		if(parseFloat(req.params.number) === value.age){
			result = value
		}
	})

	res.json(result);
})

App.get('/skills/:skill', (req,res) => {
	let result = {"error":"not available"}
	dataBase.forEach((value) => {
		//use parseFloat to turn string to number so we can use the strictly equals operator
		if(req.params['skill'] === value['skill']){
			result = value
		}
	})
	res.json(result);
})

//i just prefer the one liner
App.listen(port, () => {})