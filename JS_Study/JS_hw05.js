obj = {name : 'javascript', age : 14, type : 'dynamic'};

function printObject(obj)
{
	for ( var i in obj)
	{
		console.log('key : ' + i + '  value : ' + obj[i]);
	}
}

printObject(obj);