//the function select shortens the code of getting the element in html
function select(id){
	return document.getElementById(id);
}

//creates an array that has the values of the sidekicks, robots and boosters
var masses = [
	{
		id: "sidekicks",
		mass: 70
	},
	{
		id: "robots",
		mass: 120
	},
	{
		id: "boosters",
		mass: 91000
	}
];

//when called, this method obtains the sum of all of the values listed
function getSum(){
	var result = 0;
	for(var i = 0; i < masses.length; i++){
		result += select(masses[i].id).value * masses[i].mass;
	}
	return result;
}

//this changes the HTML span, "weight", allowing the value of the getSum() method to be displayed
masses.forEach(function(mass){
	select(mass.id).addEventListener("keyup", function(){
		select("weight").innerHTML = getSum();
	});
});