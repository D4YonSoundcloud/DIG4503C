import Express from 'express';
const App = Express();
const port = 3001;

const things = [
	'thing1',
	'thing2',
	'thingDeezNuts',
];

//I personally prefer to use the Object['key'] syntax to access key values of params
App.get('/things/:thing', (req, res) => {
	let thing = req.params['thing'];
	if(things.includes(thing)){
		res.json({'selected thing': thing})
	} else {
		res.json({'selected thing': 'there is no thing that matches that'})
	}
})

App.listen(port, () => {

})

App.get('/search/:thing', (req,res) => {
	const result = things.filter(string => string.includes(req.params['thing']))
	if (result != 0) {
		res.json({ 'found thing': result})
	} else {
		res.json({ 'found thing': "there was no thing"})
	}
})
