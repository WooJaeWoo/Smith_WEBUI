var arr = [1,2,3,4,44,66,42,12,32,1,33,98];
var count = 0;
for (var i = 0; i < arr.length; i++)
{
	if (typeof arr[i] == "string")
	{
		console.log("Sorry, string detected!")
		break;
	}
	if (arr[i] % 2 == 0)
	{
		count++;
	}
}
console.log("The number of even: " + count);