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
