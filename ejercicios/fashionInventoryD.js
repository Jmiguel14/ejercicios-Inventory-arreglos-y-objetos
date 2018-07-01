function getLaceNameDataForShoes(inventory) {
	let namesWhitOutSpace = [];

	let index = [];
	inventory.forEach(desingers =>{
		desingers.shoes.forEach(shoes =>{
			namesWhitOutSpace.push(shoes.name.split(' '));
		})
	})
	namesWhitOutSpace.forEach(names =>{
		console.log(names.includes('lace'));
	})
}

module.exports = getLaceNameDataForShoes;
