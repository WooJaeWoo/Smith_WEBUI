window.addEventListener('load', function() {
	var menuTrigger = document.querySelector('#main_menu_trigger');
	var mainMenu = document.querySelector('#main_menu');
	menuTrigger.addEventListener('mouseover', function(ev) {
		mainMenu.style.display = "block";
		mainMenu.style.opacity = "1";
	}, false)
	menuTrigger.addEventListener('mouseout', function(ev) {
		mainMenu.style.display = "none";
		mainMenu.style.opacity = "0";
	})
}, false)