const axios = require("axios");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let pokemonUrl;

const getAbilities = ( abilities ) => {
	let abilitiesArray = []
	for(let ability of abilities) {
		abilitiesArray.push(ability['ability']['name'])
	}
	return abilitiesArray
}

let checkIfMove = ( move ) => {
	if(move === undefined){
		return 'empty';
	} else {
		return move;
	}
}

const askQuestion = () => {
	rl.question("\n Enter a Pokemon name to get it's details ", (pokemon) => {
		pokemonUrl = `http://pokeapi.co/api/v2/pokemon/${pokemon}`
		getPokemon();
	})
}

rl.on("close", () => {
	process.exit(0);
})

const getPokemon = () => {
	axios(pokemonUrl).then((result) => {
		let pokemon = result.data;
		let abilitiesArray = getAbilities(result.data['abilities'])
		console.log(pokemon.name.toUpperCase() + ' ID:' + pokemon.id)
		console.log(`Moves: ${checkIfMove(abilitiesArray[0])}, ${checkIfMove(abilitiesArray[1])}, ${checkIfMove(abilitiesArray[2])}, ${checkIfMove(abilitiesArray[3])}`)
		askQuestion();
	}).catch((err) => { console.log('Error:' + err) })
}

askQuestion();





