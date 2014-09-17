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
	document.querySelector('.see_more').addEventListener('click', function(e) {
		document.querySelector('#fantasy_sale').style.display = "none";

		var url = "http://localhost:8000/Booklist.json";
		var request = new XMLHttpRequest();
		request.open("GET", url, true);
		request.send(null);
		request.onreadystatechange = function()
		{
			if (request.readyState === 4 && request.status === 200)
			{
				var bookData = request.responseText;
				bookData = JSON.parse(bookData);
				var cardList = document.querySelector('.weekly_best .card_list ul');
				var newBookList = bookData["weeklyMore"];
				cardList.innerHTML += makeBookElement(sTemplate, newBookList);
				cardList.parentElement.style.overflow = "visible";
			}
		};
		
		//Scoroll Function
		//window.scrollTo(0,document.body.scrollHeight);
		scrollDown();
	}, false)
}, false)

function scrollDown() {
	var velocity = 60;
	var sdInterval = setInterval(function () {
		scrollBy(0, velocity);
		var endPoint = document.body.scrollHeight - scrollY;
		if (endPoint < 700 || velocity < 0)
		{
			clearInterval(sdInterval);
		}
		else if (endPoint < 1280)
		{
			velocity = velocity - 3;
		}
	}, 18);
}