Bread: {
  type: DataTypes.ENUM('White', 'Whole grain', 'Whole wheat', 'Vegan', 'Keto'),
  required: true,
},
Meat: {
  type: DataTypes.ENUM('Chicken', 'Chorizo', 'Prosciutto', 'Pastrami', 'Roast Beef', 'Salami', 'Turkey'),
  required: false,
},
Vegetables: {
  type: DataTypes.ENUM('Avocado', 'Lettuce', 'Olives', 'Onions', 'Peppers', 'Pickles', 'Sprouts'),
  required: false,
},
Dressing: {
  type: DataTypes.ENUM('Aioli', 'Guacamole', 'Horseradish', 'Mayo', 'Mustard', 'Oil', 'Pesto'),
  required: false,
},
Toasted: {
  type: DataTypes.BOOLEAN,
  required: true,
},