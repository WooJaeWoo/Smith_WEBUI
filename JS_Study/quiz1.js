function avg () {
	var sum = 0;
	var len = arguments.length;

	for (var i = 0; i < len; i++)
	{
		if (typeof arguments[i] !== "number")
		{
			console.log ("Error입니다!");
			return;
		}
		sum += arguments[i];
	}
	result = sum / len;
	return result;
}

avg (10, 20, "30", 40, 50);