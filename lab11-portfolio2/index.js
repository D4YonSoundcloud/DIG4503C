import MongoClient from 'mongodb'
import Express from 'express';
const App = Express();
//Cors is needed so we can actually get request from our Express Server
import cors from 'cors'
const port = 3333;

//url for connecting to our database

//name of the collection
let collectionName = "Tricks-Final-Final"

//create variable to store our tricks
let tricks = []

//Enables Cross-Origin Resource Sharing, so that we can actually get request
App.use(cors());

/**
 * GET level + grip
 */
App.get('/level/:level/grip/:grip', (req, res) => {

	let result = {"error": "no tricks of this level found"};
	//get level + grip from the params
	let levelToFind = parseFloat(req.params.level);
	let gripToFind = req.params.grip

	//connect to our Database
	MongoClient.connect(URL, { useUnifiedTopology: true })
		.then(connection => {
			let database = connection.db('Kendama-Tricks');
			let collection = database.collection(collectionName)
			//Query for tricks that match our criteria
			let cursor = collection.find({ level: levelToFind, grip: gripToFind })
			tricks = []
			cursor.forEach(document => {
				//push a new object for each trick that has its name, level, and grip
				tricks.push(
					{
						name: document.name,
						level: document.level,
						grip: document.grip,
					}
				);
			}, () => {
				//set the result to the tricks array of trick objects
				result = tricks;
				//close the database connection
				connection.close();
				//return the tricks array so our client can use it
				return res.json(result);
			})
		})
		.catch(error => {
			console.log("Error: " + error);
		})
})

/**
 * Get Level, no grip
 */
App.get('/level/:level', (req, res) => {

	let result = {"error": "no tricks of this level found"};
	//get level from the params
	let levelToFind = parseFloat(req.params.level);
	MongoClient.connect(URL, { useUnifiedTopology: true })
		.then(connection => {
			//see above comments
			let database = connection.db('Kendama-Tricks');
			let collection = database.collection(collectionName)
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