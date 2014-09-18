window.addEventListener('load', function() {
	var menuTrigger = document.querySelector('#main_menu_trigger');
	var mainMenu = document.querySelector('#main_menu');
	menuTrigger.addEventListener('mouseover', function(ev) {
		console.log("mouserover");
		mainMenu.style.display = "block";
		var _el = ev.target;
		var eOpacity = 0;
		var overEvent = setInterval(function () {
			console.log(mainMenu.style.opacity);
			mainMenu.style.opacity = eOpacity;
			eOpacity += 0.1;
			if (mainMenu.style.opacity > 1)
			{
				clearInterval(overEvent);
			}
		}, 100);
	}, false)

	mainMenu.addEventListener('mouseout', function(ev) {
		mainMenu.style.display = "none";
		var _el = ev.target;
		var eOpacity = 1;
		var overEvent = setInterval(function () {
			mainMenu.style.opacity = eOpacity;
			eOpacity -= 0.1;
			if (mainMenu.style.opacity < 0)
			{
				clearInterval(overEvent);
			}
		}, 100);
	}, false)
}, false)