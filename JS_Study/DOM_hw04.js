window.onload= function() {
  var shopping = document.createElement('li');
  shopping.textContent = "쇼핑";
  var wrap = document.getElementById('wrap');
  wrap.children[0].insertBefore(shopping, wrap.children[0].children[2]);
};
