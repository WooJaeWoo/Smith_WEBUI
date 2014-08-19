var arr = [1, 2, 3];
function dummy (arr) {
	var temp = 0
	len = arguments.length;
	for (var i = 0; i < (len / 2); i++)
	{
		temp = arr[i];
		arr[i] = arr[len - i - 1];
		arr[len - i - 1] = temp;
	}
	return arr;
}
var result = dummy (arr)
console.log(result);
console.log(arr);