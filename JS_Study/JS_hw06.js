var arr = [23, -2, 23.4, "324", 333, 34, 1000, 20];

function userFunction(arr)
{
	var result = arr.filter(function(item){
		return item % 2 === 0 && typeof item === "number";
	});
	console.log(result);
}