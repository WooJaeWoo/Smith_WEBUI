function clickGenreMenuButton ()
{
	var genreButton = document.querySelector("div.genre > span");
	var genreContainer = document.querySelector("div.genre_container");
	document.addEventListener('click', function(ev) {
		if (ev.target === genreButton && genreContainer.style.display === "none")
		{
			genreContainer.style.display = "block";
			return;
		}
		else if (genreContainer.style.display === "block")
		{
			genreContainer.style.display = "none";
		}
	}, false);
}

window.addEventListener('load', clickGenreMenuButton, false);

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
	document.querySelector('div.genre_container ul').addEventListener('click', function(ev) {
		if (ev.target.nodeName !== "A") return;
		var loadArrow = document.querySelector('#loading_effect');
		loadArrow.style.display = "block";
		setTimeout(makeDelay, 500);
		function makeDelay() {
			var url = "http://localhost:8000/Booklist.json";
			var request = new XMLHttpRequest();
			request.open("GET", url, true);
			request.send(null);
			request.onreadystatechange = function()
			{
				if (request.readyState === 4 && request.status === 200)
				{ // Hide loading effect
					loadArrow.style.display = "none";
				  // Change Book list
					var bookData = request.responseText;
					bookData = JSON.parse(bookData);
				    var cardList = document.querySelector('.weekly_best .card_list ul');
					var _el = ev.target;
					var newBookList = bookData[_el.className];
					cardList.innerHTML = makeBookElement(sTemplate, newBookList);
				}
			};
		}
	}, false)
}, false)
