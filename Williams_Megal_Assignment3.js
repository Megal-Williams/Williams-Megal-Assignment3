
//	Megal Williams
//	12/10/2012
//	Project 3
//	Creating a Football Team with my Kids


var teams = [];  // Holds an array of footballTeam objects created

// Constructor 
var footballTeam = function (name, coach) {
	var injuries, injuriesNum = 0;
	var roster = [];
	// Accessors
	var getName = function () { return name; };   // String return
	var getCoach = function () { return coach; }; // String return
	var getKid = function (kid, json) {     // Takes a kid name and JSON data from json.js
		var kidInfo;
		for (var i = 0, j = roster.length; i < j; i++) { // loop to see if kid is on roster if found break and move on
			//console.log("got here"); // Debug check on loop
			//console.log(roster[i]);  // Debug check on loop
			if (roster[i] === kid){
				break;
			};
		};
		if (roster[i] === undefined) {
			kidInfo = "kid is not on roster.";
			return kidInfo; // String return
		};
		for (var ii = 0, jj = json.kid.length; ii < jj; ii++) {   // Loop through json object of kids to find info
			//console.log("got here also");  // Debug check on loop
			var play = json.kids[ii];
			//console.log(play.name + " " + roster[i]);  // Debug check on loop
			if (roster[i] === play.name) {
				kidInfo = play.name + " - " + "Age: " + play.age + " - " + "Born: " + play.born[0] + " in " + play.born[1] + "," + play.born[2]
					+ "\n" + "Position: " + play.position + " - " + "Throws: " + play.hand;
				return kidInfo; // String return
			};
		};
		kidInfo = kid + " not found on kid data list.";
		return kidInfo;
	};
	var getRoster = function () { return roster; }; // Array return

	// Mutators
	var cutkid = function (kid) {   // Function takes an array of kid or kids
		var cut = 0;
		for (var i = 0, j = kid.length; i < j; i++) {
			if (kid[i] === "") {
				break;
			} else {
				var kidRemove = roster.indexOf(kid[i]);
				if (kidRemove === -1) {
					console.log("kid not found.");
				} else {
					//console.log(kidRemove);  // Debug usage to check index location
					roster.splice(kidRemove,1);
					console.log(kid + " removed from " + name + " roster.");
					cut++;
				};
			};
		};
		return cut; // Number return
	};
	var addkid = function (kid) {  // Function takes an array of kid or kids
		var added = 0;
		for (var i =0, j = kid.length; i<j; i++) {
			roster.push(kid[i]);
			console.log(kid[i] + " added to " + name + " roster.");
			added++;
		};
		return added; // Number return
	};
	var playGame = function (homeTeam,awayTeam){    // Gameplay simulation will be a different outcome every time
		var outCome = [];
		var hScore = Math.floor(Math.random()*8);
		var aScore = Math.floor(Math.random()*8);
        var period = 1;
		while (period < 4){
            console.log("Playing period #" + period + ".");
            period++;
        };
        if (hScore > aScore) {
			console.log(homeTeam + " won the game!");
		}
		else if (aScore > hScore) {
			console.log(awayTeam + " won the game!");
		} else {
			console.log("Game ended in a tie!");
		};
		outCome.push([homeTeam,hScore]);
		outCome.push([awayTeam,aScore]);
		return outCome;  // 2D Array return
	};
	var playedLeague  = function () {  // Checks to see if team has players that played little league
		var leaguePlayers;
		for (var i = 0, j = roster.length; i < j; i++){
			for (var ii = 0, jj = kidData.kids.length; ii < jj; ii++){
				var play = kidData.kids[ii];
				if ((roster[i] === play.name) && (play.playedLeague === true)) {
					leaguePlayers = true;
					break;
				} else if ((roster[i] === play.name) && (play.playedLeague === false)) {
					break;
				};
			};
		};
		return leaguePlayers; // Boolean return
	};
	var setInjuries = function (boolinput, number) {
		if (boolinput === true && isNaN(number) === false) {
			injuredNum = number;
			injuries = boolinput;
		} else if (boolinput === false || isNaN(number) === true) {
			injuries === false;
			console.log(number + " is not a number.");
		} else {
			console.log("Not a true or false input");
		};
	};
	var getInjuries = function () { return injuredNum; };
	// Public methods
	return {   // Object return
		"getName": getName,     // Accessor
		"getCoach": getCoach,	// Accessor
		"getKid": getKid,	// Accessor
		"getRoster": getRoster,	// Accessor
		"cutKid": cutKid, // Mutator
		"addKid": addKid, // Mutator
		"playGame": playGame,
		"haveLeaguePlayers": playedLeague,
		"setInjuries": setInjuries,
		"getInjuries": getInjuries

	};
};


// Create Team
console.log("Time to create some Football Teams!");
var team1 = FootballTeam("Dozers", "Emmanuel Ramos");
console.log(team1.getName() + " team created and the coach is " + team1.getCoach() + ".");
teams.push(team1);
var team2 = FootballTeam("Titans", "Sevyn Williams");
console.log(team2.getName() + " team created and the coach is " + team2.getCoach() + ".");
teams.push(team2);
console.log(" ");
// Add kids to team
console.log("These teams needs some kids!" + "\n" + "Lets add some to the rosters.");
console.log(" ");
team1.addPlayer(["Timmy Walker", "Johnny Domer", "Robby Rither", "Mark Stratus", "Bobby Stevens", "Parker White"]);
console.log(" ");
team2.addPlayer(["Jack Denver", "Jim Bean", "Ben Jerrys", "Willy Travis", "Matthew Demper", "Adam Drake"]);
console.log(" ");
// View the rosters
console.log("Team 1's name is the " + team1.getName() + ".");
console.log("Here is the " + team1.getName()+ " roster: " + team1.getRoster() + ".");
console.log("Do the " + team1.getName() + " have any former league players?");
if (team1.haveLeaguePlayers() === true){
	console.log("Yes they do.");
} else {
	console.log("No they do not.");
};

console.log(" ");
console.log("Team 2's name is the " + team2.getName() + ".");
console.log("Here is the " + team2.getName()+ " roster: " + team2.getRoster() + ".");
console.log("Do the " + team2.getName() + " have any former league players?");
if (team2.haveLeaguePlayers() === true){
	console.log("Yes they do.");
} else {
	console.log("No they do not.");
};
console.log(" ");
// Set some injuries
team1.setInjuries(true, 1);
team2.setInjuries(true, 1);
console.log(team1.getName() + " injury count: " + team1.getInjuries());
console.log(team2.getName() + " injury count: " + team2.getInjuries());
console.log(" ");
// Cut some kids
console.log("Looks like we need to cut some kids before the big championship.");
console.log("How many were cut from the " + team1.getName() + " roster? " + team1.cutkid(["Matthew Demper"]));
console.log("How many were cut from the " + team2.getName() + " roster? " + team2.cutKid(["Bobby Stevens"]));
console.log(" ");
// Pickup some new kids 
console.log("Time to pick up some better help.")
team1.addPlayer(["Adam Drake"]);
team2.addPlayer(["Parker White"]);
console.log(" ");
// Get the new kids info
console.log("Lets find out some info about our new players.");
console.log(team1.getkid("Adam Drake",kidData));
console.log(team2.getKid("Parker White",kidData));
console.log(" ");
// Simulate a game - refresh to play it again with a new random outcome
var outCome = team1.playGame(team1.getName(),team2.getName());
console.log("Game score: " + outCome[0][0] + " - " + outCome[0][1] + " : " + outCome[1][0] + " - " + outCome[1][1]);
console.log(" ");
