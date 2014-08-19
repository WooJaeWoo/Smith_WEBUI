var aData = [0, false, -1, 1, null, "", "   ", undefined, NaN,];

for (var i = 0; i < aData.length; i++)
{
	if (aData[i])
	{
		console.log(aData[i] + " is true");
	}
}


//결과:
//-1 is true
//1 is true
//     is true

//이유:
//값으로써 의미있는 값들을 출력하는 것 같습니다.
//0, false, null, "", undefined, NaN은 true 값으로 인정되지 않기 때문에
//if문 자체에 들어가지를 못 했고, 나머지 -1, 1, "    "(공백)은 값으로 인정된 것 같습니다.