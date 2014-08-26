function LiPrint ()
{
	var getLi = document.getElementsByTagName('li');
	var getLiLength = getLi.length;
	for (var i = 0; i < getLiLength; i++)
	{
		var liClassName = getLi[i].className;
		if (liClassName !== "")
		{
			console.log(getLi[i].className);
		}
	}
}