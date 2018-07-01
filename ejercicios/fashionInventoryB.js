function renderAverageCostPerDesigner(inventory) {
	const currentInventory = {
		'designers' : []
	}
	let average;
	let name = '';
	inventory.forEach((designers) => {
		average = 0;
		name = designers.name;
		designers.shoes.forEach((shoes) =>{
			average += shoes.price;
		})
		average /= designers.shoes.length;
		currentInventory.designers.push({'name': name, 'averagePrice' : average });
	})
	return currentInventory;
}

module.exports = renderAverageCostPerDesigner;
