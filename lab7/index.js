import Express from 'express';
const App = Express();
const port = 3002;

const names = [
	'Cortney',
	'Dewayne',
	'Trenton',
	'Pamala',
	'Ettie',
	'Errol',
	'Lorrie',
	'Hang',
	'Lauryn',
	'Caterina',
	'Isa',
	'Marcela'
];

//I personally prefer to use the Object['key'] syntax to access key values of params
App.get('/people/:person', (req, res) => {
	let name = req.params['person'];
	if(names.includes(name)){
		res.json({Person: name})
	} else {
		res.json({Person: "Not Available"})
	}
})

App.get('/search/:name', (req,res) => {
	const result = names.filter(string => string.includes(req.params['name']))
	if (result != 0) {
		res.json({ search: result})
	} else {
		res.json({ search: "Not available"})
	}
})

App.listen(port, () => {

})