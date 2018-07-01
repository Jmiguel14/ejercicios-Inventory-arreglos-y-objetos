function filterBlackShoes(shoeList) {
	let name = '';
	let contine;
	let blackShoes = [];
	shoeList.forEach((designers) => {
		name = designers.name;
		designers.shoes.forEach((shoes) =>{
			contine = shoes.name.indexOf('black');
			if(contine >= 0){
				blackShoes.push([name, shoes.name, shoes.price]);
			}
		})
	})
	return blackShoes;
}

module.exports = filterBlackShoes;