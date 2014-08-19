function addNum(num, func)
{
	value = func(num);
	return function(){return ++value}
}

var newfun = function(arg) {return ++arg};
resultfun = addNum(2, newfun);
resultfun();