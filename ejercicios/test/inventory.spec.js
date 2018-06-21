const assert= require("chai").assert;
const currentInventory = require("../data/data.js");
const renderInventory = require("../fashionInventoryA.js");
const renderAverageCostPerDesigner = require("../fashionInventoryB.js");
const filterBlackShoes = require("../fashionInventoryC.js");
const getLaceNameDataForShoes = require("../fashionInventoryD.js")
console.log(typeof renderInventory);

describe('renderInventory()', () => {
  it('Deberia ser una función', () => {
    assert.isFunction(renderInventory);
  });

  it('Deberia retornar un arreglo de arreglos donde cada arreglos va a tener 3 elementos', () => {
    assert.deepEqual(renderInventory(currentInventory),
    [ [ 'Brunello Cucinelli', 'tasselled black low-top lace-up', 1000 ],
      [ 'Brunello Cucinelli', 'tasselled green low-top lace-up', 1100 ],
      [ 'Brunello Cucinelli', 'plain beige suede moccasin', 950 ],
      [ 'Brunello Cucinelli', 'plain olive suede moccasin', 1050 ],
      [ 'Gucci', 'red leather laced sneakers', 800 ],
      [ 'Gucci', 'black leather laced sneakers', 900 ] ])
  });
});

describe('renderAverageCostPerDesigner()', () => {
  it('Deberia ser una función', () => {
    assert.isFunction(renderAverageCostPerDesigner);
  });
  it('Deberia retornar un objeto con una propiedad "designers" que contiene un arreglo de objetos', () => {
    assert.deepEqual(renderAverageCostPerDesigner(currentInventory),
    {designers:
      [{ name: 'Brunello Cucinelli', averagePrice: 1025 },
        { name: 'Gucci', averagePrice: 850 }
      ]})
  });
});

describe('filterBlackShoes()', () => {
  it('Deberia ser una función', () => {
    assert.isFunction(filterBlackShoes);
  });
  it('Deberia retornar un arreglo de arreglos con tres elementos cada arreglo', () => {
    assert.deepEqual(filterBlackShoes(currentInventory),
    [ [ 'Brunello Cucinelli', 'tasselled black low-top lace-up', 1000 ],
      [ 'Gucci', 'black leather laced sneakers', 900 ] ])
  })

});

describe('getLaceNameDataForShoes()', () => {
  it('Deberia ser una función', () => {
    assert.isFunction(getLaceNameDataForShoes);
  });
  it('Deberia retornar un arreglo de objetos y cada objeto contiene dos propiedades y su valor ', () => {
    assert.deepEqual(getLaceNameDataForShoes(currentInventory),
    [{
        "nameWords": [
          "tasselled",
          "black",
          "low-top",
          "lace-up"
        ],
        "targetWordIndex": 3
      },
      {
        "nameWords": [
          "tasselled",
          "green",
          "low-top",
          "lace-up"
        ],
        "targetWordIndex": 3
      },
      {
        "nameWords": [
          "red",
          "leather",
          "laced",
          "sneakers"
        ],
        "targetWordIndex": 2
      },
      {
        "nameWords": [
          "black",
          "leather",
          "laced",
          "sneakers"
        ],
        "targetWordIndex": 2
      }
    ] )
  });
});
