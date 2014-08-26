var aBookList = [
{
	id : "book-iLQ5BAAAQBAJ",
	name : "아서왕과 원탁의 기사들",
	imgSrc : "http://goo.gl/tfHw4e",
	src : "http://goo.gl/65Im7q",
	author : "토머스 불핀치"
},
{
	id : "book-jLQ5BADJFIEWL",
	name : "어린왕자",
	imgSrc : "http://goo.gl/pDXdVo",
	src : "http://goo.gl/aSvgGF",
	author : "앙투안 드 생텍쥐페리"
}
];

var sTemplate = "<h2><%=title%></h2><div><a href='<%=endPageLink%>'><img src='<%=imgUrl%>'></a></div>"

function makeBookElement(template, bookList)
{
	var result = [];
	bookList.forEach(function(item){
		var tempstr = template;
		tempstr =
		template.replace("<%=title%>", item["name"])
		.replace("<%=endPageLink%>", item["src"])
		.replace("<%=imgUrl%>", item["imgSrc"]);		
		result.push(tempstr);
	});
	result = result.join("");
	console.log(result);
}

makeBookElement(sTemplate, aBookList);
// “<h2>어린왕자</h2><div><a href='http://goo.gl/aSvgGF'><img src='http://goo.gl/pDXdVo'></a></div>"
