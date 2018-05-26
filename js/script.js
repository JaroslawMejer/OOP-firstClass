function Phone (brand, price, color, tip){
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.tip = tip;
}

Phone.prototype.printInfo = function(){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + '.')
}

Phone.prototype.proTip = function(){
	console.log('Protip: ' + this.tip)
}

var iPhone6S = new Phone('Apple', 2250, 'silver', 'Iphones sucks');
var samsungGalaxyS8 = new Phone ('Samsung', 2600, 'midnight', 'Don`t know shit about Samsungs');
var onePlusOne = new Phone ('Oneplus', 1400, 'black', 'What is it?');
var SonyXZ = new Phone ('Sony', 1300, 'blue', 'Worst phone ever');