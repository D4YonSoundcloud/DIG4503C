import MongoClient from 'mongodb'
import Express from 'express';
const App = Express();
import cors from 'cors'
const port = 3333;

let tricks = []
MongoClient.connect(URL, { useUnifiedTopology: true })
	.then(connection => {
		let database = connection.db('Kendama-Tricks');

		let collection = database.collection("Tricks-Test")

		let cursor = collection.find({level: 1})

		tricks = []
		cursor.forEach(document => {
			console.log(document.name);
		}, () => {
			connection.close();
		})
	})
	.catch(error => {
		console.log("Error: " + error);
	})

//Enables Cross-Origin Resource Sharing, so that we can actually get request
App.use(cors());

/**
 * GET level
 */
App.get('/level/:level/grip/:grip', (req, res) => {
	let result = {"error": "no tricks of this level found"};
	console.log(parseFloat(req.params.level))
	let levelToFind = parseFloat(req.params.level);
	let gripToFind = req.params.grip
	MongoClient.connect(URL, { useUnifiedTopology: true })
		.then(connection => {
			let database = connection.db('Kendama-Tricks');
			let collection = database.collection("Tricks-Test")
			let cursor = collection.find({ level: levelToFind, grip: gripToFind })
			tricks = []
			cursor.forEach(document => {
				tricks.push(
					{
						name: document.name,
						level: document.level,
						grip: document.grip,
					}
				);
				console.log(tricks);
				console.log(document.name);
			}, () => {
				console.log(result);
				result = tricks;
				console.log('it has been fulfilled', result)
				connection.close();
				return res.json(result);
			})
		})
		.catch(error => {
			console.log("Error: " + error);
		})
})

App.get('/level/:level', (req, res) => {
	let result = {"error": "no tricks of this level found"};
	let levelToFind = parseFloat(req.params.level);
	MongoClient.connect(URL, { useUnifiedTopology: true })
		.then(connection => {
			let database = connection.db('Kendama-Tricks');
			let collection = database.collection("Tricks-Test")
			let cursor = collection.find({ level: levelToFind })
			tricks = []
			cursor.forEach(document => {
				tricks.push(
					{
						name: document.name,
						level: document.level,
						grip: document.grip,
					}
				);
			}, () => {
				result = tricks;
				connection.close();
				return res.json(result);
			})
		})
		.catch(error => {
			console.log("Error: " + error);
		})
})

//i just prefer the one liner
App.listen(port, () => {})