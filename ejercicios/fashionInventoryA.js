
const renderInventory = function (inventory) {
  // your code here
  // hint: before you just dive into coding...
  /* it's a good idea to sketch out a skeleton like
  you've been seeing earlier in this module...*/
  let fashion = [];
  let designer = "";
  let shoes = "";
  let price = 0;
  let shoesName = "";
  for (let i = 0;i <inventory.length; i++) {
  		designer = inventory[i]['name'];
  		shoes = inventory[i]['shoes'];
  	for(let j = 0; j < shoes.length; j++){
  		price = shoes[j]['price'];
  		shoesName = shoes[j]['name'];
  		fashion.push([designer, shoesName, price]);
 	 }
 	}
 	return fashion;
}

module.exports = renderInventory;
