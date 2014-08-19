var a = null;
a = 0 + null;
var myValue = a || "default value";

console.log(myValue);



//결과:
//default value

//이유:
//a값이 의미 있는 값이 아니기 때문에 값이 있는 "default value" 문자열이 출력됩니다.