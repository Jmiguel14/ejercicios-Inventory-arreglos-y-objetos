# Instructions from your coaches:

### First exercise

You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

``` javascript
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
```


Look up all the shoes across all the designers and list them out in a array of array with format:

```
[[designer name, shoe name, price], [designer name. shoe name, price], ....]
```
E.g.,
```javascript
[
  [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
  [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
...
]
```

### Second exercise

This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own. It's the same inventory data structure as earlier:

```javascript
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
```

Now output the average cost of all shoes per designer in this format:

```javascript
var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};
```

### Third exercise

This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.
It's the same inventory data structure as earlier:

```javascript
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
```

Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

```javascript
[
   [Brunello Cucinelli,tasselled black low-top lace-up,1000],
   [Gucci,black leather laced sneakers,900]
]
```

### Fourth exercise

This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:

```javascript
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
```
The task now is to find all the laced shoes. Output shoe names that contain "lace" in them, and indicate which word contains "lace".
The output format should be structured like this:

```javascript
[
  {
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
]
```
