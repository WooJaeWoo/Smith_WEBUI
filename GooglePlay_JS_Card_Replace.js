var aBookList = [
{
	title : "열심히 산다는 것과 잘 산다는 것의 차이는 뭘까",
	imgSrc : "Img/3-1.jpg",
	src : "https://play.google.com/store/books/details/%EC%A7%84%EC%A0%95%EC%B2%A0_%EC%97%B4%EC%8B%AC%ED%9E%88_%EC%82%B0%EB%8B%A4%EB%8A%94_%EA%B2%83%EA%B3%BC_%EC%9E%98_%EC%82%B0%EB%8B%A4%EB%8A%94_%EA%B2%83%EC%9D%98_%EC%B0%A8%EC%9D%B4%EB%8A%94_%EB%AD%98%EA%B9%8C?id=kYxO_2Fr_tQC",
	author : "진정철",
	price : "₩1,500"
},
{
	title : "60억분의 1",
	imgSrc : "Img/3-2.jpg",
	src : "https://play.google.com/store/books/details/%EB%B0%B1%EC%8A%B9%ED%9B%84_60%EC%96%B5%EB%B6%84%EC%9D%98_1_02%EA%B6%8C?id=ashKCy_h5-kC",
	author : "백승후",
	price : "₩3,200"
},
{
	title : "잘못은 우리 별에 있어",
	imgSrc : "Img/3-3.jpg",
	src : "https://play.google.com/store/books/details/%EC%A1%B4_%EA%B7%B8%EB%A6%B0_%EC%9E%98%EB%AA%BB%EC%9D%80_%EC%9A%B0%EB%A6%AC_%EB%B3%84%EC%97%90_%EC%9E%88%EC%96%B4?id=hPZ0JcqCgXcC",
	author : "존 그린",
	price : "₩8,400"
},
{
	title : "칼의 노래",
	imgSrc : "Img/3-4.jpg",
	src : "https://play.google.com/store/books/details/%EA%B9%80%ED%9B%88_%EC%B9%BC%EC%9D%98_%EB%85%B8%EB%9E%98?id=EQmbAAAAQBAJ",
	author : "김훈",
	price : "₩8,400"
},
{
	title : "불륜",
	imgSrc : "Img/3-5.jpg",
	src : "https://play.google.com/store/books/details/%ED%8C%8C%EC%9A%B8%EB%A1%9C_%EC%BD%94%EC%97%98%EB%A3%8C_%EB%B6%88%EB%A5%9C?id=ez1ABAAAQBAJ",
	author : "파울로 코엘료",
	price : "₩8,300"
},
{
	title : "두근두근 내 인생",
	imgSrc : "Img/3-6.jpg",
	src : "https://play.google.com/store/books/details/%EA%B9%80%EC%95%A0%EB%9E%80_%EB%91%90%EA%B7%BC%EB%91%90%EA%B7%BC_%EB%82%B4_%EC%9D%B8%EC%83%9D?id=uRLEAwAAQBAJ",
	author : "김애란",
	price : "₩7,700"
},
{
	title : "어린 왕자(한글판)",
	imgSrc : "Img/3-7.jpg",
	src : "https://play.google.com/store/books/details/%EC%95%99%ED%88%AC%EC%95%88_%EB%93%9C_%EC%83%9D%ED%85%8D%EC%A5%90%ED%8E%98%EB%A6%AC_%EC%96%B4%EB%A6%B0_%EC%99%95%EC%9E%90_%ED%95%9C%EA%B8%80%ED%8C%90?id=9oklu6-L5nMC",
	author : "앙투안 드 생텍쥐페리",
	price : "₩1,500"
},
{
	title : "데스노트에 이름을 쓰면 살인죄일까?",
	imgSrc : "Img/3-8.jpg",
	src : "https://play.google.com/store/books/details/%EA%B9%80%EC%A7%80%EB%A3%A1_%EB%8D%B0%EC%8A%A4%EB%85%B8%ED%8A%B8%EC%97%90_%EC%9D%B4%EB%A6%84%EC%9D%84_%EC%93%B0%EB%A9%B4_%EC%82%B4%EC%9D%B8%EC%A3%84%EC%9D%BC%EA%B9%8C?id=lSQzAAAAQBAJ",
	author : "김지룡",
	price : "₩7,250"
},
{
	title : "열심히 산다는 것과 잘 산다는 것의 차이는 뭘까",
	imgSrc : "Img/3-1.jpg",
	src : "https://play.google.com/store/books/details/%EC%A7%84%EC%A0%95%EC%B2%A0_%EC%97%B4%EC%8B%AC%ED%9E%88_%EC%82%B0%EB%8B%A4%EB%8A%94_%EA%B2%83%EA%B3%BC_%EC%9E%98_%EC%82%B0%EB%8B%A4%EB%8A%94_%EA%B2%83%EC%9D%98_%EC%B0%A8%EC%9D%B4%EB%8A%94_%EB%AD%98%EA%B9%8C?id=kYxO_2Fr_tQC",
	author : "진정철",
	price : "₩1,500"
},
{
	title : "60억분의 1",
	imgSrc : "Img/3-2.jpg",
	src : "https://play.google.com/store/books/details/%EB%B0%B1%EC%8A%B9%ED%9B%84_60%EC%96%B5%EB%B6%84%EC%9D%98_1_02%EA%B6%8C?id=ashKCy_h5-kC",
	author : "백승후",
	price : "₩3,200",
}
];

var sTemplate =
"<li>"
+	"<a href='<%=src%>'>"
+		"<div><img src='<%=imgSrc%>'></div>"
+		"<div class='book_cover'></div>"
+		"<div>"
+			"<a class='book_title' href='<%=src%>'><%=title%></a><br/>"
+			"<a class='author' href=''><%=author%></a>"
+			"<a class='price' href=''><%=price%></a><br/>"
+		"</div>"
+	"</a>"
+"</li>"

function makeBookElement(template, bookList)
{
	var result = [];
	bookList.forEach(function(v,i,o){
		var tempstr = template;
		tempstr =
		template.replace("<%=src%>", v.src)
		.replace("<%=imgSrc%>", v.imgSrc)
		.replace("<%=src%>", v.src)
		.replace("<%=title%>", v.title)
		.replace("<%=author%>", v.author)
		.replace("<%=price%>", v.price);		
		result.push(tempstr);
	});
	result = result.join("");
	return result;
}

window.addEventListener('load', function() {
	var genreSelector = document.querySelector('.genre_container');
	genreSelector.addEventListener('click', function(e) {
		var cardListFantasy = document.querySelector('#fantasy_sale');
		cardListFantasy.style.display = "none";
		
		var cardListWeeklyBest = document.querySelector('.weekly_best .card_list ul');
		cardListWeeklyBest.innerHTML = makeBookElement(sTemplate, aBookList);
		cardListWeeklyBest.parentElement.style.overflow = "visible";
		
		var cardListBook = document.querySelectorAll('.weekly_best .card_list ul li');
		for (var i = 0; i < cardListBook.length; i++)
		{
			cardList_Book[i].style.marginBottom = "20px";
		}
	}, false)
}, false)

