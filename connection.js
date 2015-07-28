var Connection = function(nextNode, condition) {
	var args = arguments;
	this.test = function(param){
		if(args.length === 1){
			return true;
		}

		if(param === condition){
			return true;
		}else{
			return false;
		}
	};

	this.nextNode = nextNode;
	this.condition = condition;
};

module.exports = Connection;
