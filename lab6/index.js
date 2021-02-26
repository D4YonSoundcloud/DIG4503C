const Express = require('express');
const App = Express();
const port = 3030;

App.get('/', (request, response) => {
	response.send('Hello world!')
})

App.get('/info', (request, response) => {
	response.send({
		favoriteLanguage: 'Favorite Language: Javascript',
		favoriteFramework: 'Favorite Framework: Vue',
		favoriteBackendLanguage: 'Favorite Back-end Language: Javascript (node)',
		favoriteBackendFramework: 'Favorite Back-end Framework: Express'
	})
})

App.use('/public', Express.static('public'));

App.listen(port, () => {
	console.log('server running!')
})