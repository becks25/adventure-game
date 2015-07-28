var inquirer = require('inquirer');

var game = require('./game.source');

/*

This file has no test specs. It might be a tricky one. You need to look at 
the docs for the inquirer npm package, and see if you can figure out how 
to make the game run!

If you're running out of time, check out our solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/

var question1=[
	{
		type: "list",
		name: "direction",
		message: game.startingPoint.text,
		choices: ["left", "right"]

	}
];

var inquire = function(node){
	var question = [{
			type: "list",
			name: node.title,
			message: node.text,
			choices: node.getConnectionStrings
	}];

	inquirer.prompt(question, function(answer){
		var next = prompts(question, answer, node);

		if(next.getConnectionStrings().length > 0){
			inquire(next);
		}else{
			 console.log(next.text);
		}
	});
}

var prompts = function(questions, answers, node1){
	var connection = node1.route(answers[questions[0].name]);
	var next = game.nodes[connection];

	return next;
}

inquire(game.startingPoint);


