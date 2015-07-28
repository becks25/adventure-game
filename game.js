var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
};

Game.prototype.addNode = function(title, text){
	if(this.nodes[title]){
		throw Error();
	}
	
	this.nodes[title] = new Node(title, text);

	if(!this.startingPoint){
		this.startingPoint = this.nodes[title];
	}

	return this.nodes[title];

};

Game.prototype.getNode = function(title){
	return this.nodes[title];
};

Game.prototype.connect = function(node1, node2, condition){
	this.nodes[node1].connect(node2, condition);
}

module.exports = Game;
