function QSAnoClassName ()
{
	var elements = document.querySelectorAll('html *');
	var elementsLength = elements.length;
	var count = 0;
	for (var i = 0; i < elementsLength; i++)
	{
		if (elements[i].className === "")
		{
			count += 1;
		}
	}
	console.log(count);
}