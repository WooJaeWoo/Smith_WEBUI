var aMyBookList = [["생각버리기연습", 12300], ["자아의발견", 9900], ["토지4", 13000], ["기록의정석", 4000], ["하늘바람과별과시", 4000]];

function getExpensiveBook(arr, comparePrice, getTitle)
{
	var result =
	arr.filter(comparePrice).map(getTitle);
	return result;
}
var aList = getExpensiveBook(aMyBookList, comparePrice, getTitle);

console.log(aList);

function comparePrice(item)
{
	return item[1] >= 10000;
}

function getTitle(item)
{
	return item[0];
}
/*function getExpensiveBook(arr)
{
	var result = [];
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i][1] >= 10000)
		{
			result.push(arr[i]);
		}
	}
	return result;
}
var aList = getExpensiveBook(aMyBookList);

console.log(aList);*/