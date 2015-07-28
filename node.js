var Connection = require('./connection');

var Node = function(title, text) {
	var connections = [];

	this.title = title;
	this.text = text;
	this.connections = connections;
	this.connect = function(node2, condition){
		if(this.route(condition)){
			throw(error);
		}else{
			connections.push(new Connection(node2, condition));
		}
	}
	this.route = function(condition){
		for(var i = 0; i<connections.length; i++){
			if(connections[i].condition === condition){
				return connections[i].nextNode;
			}
		}
	}

	this.getConnectionStrings = function(){
		var arr = [];

		for(var i = 0; i<connections.length; i++){
			arr.push(connections[i].condition)
		}

		return arr;
	}

	this.hasConnectionCondition = function(condition){
		if(this.route(condition)){
			return true;
		}else{
			return false;
		}
	}
};

module.exports = Node;
