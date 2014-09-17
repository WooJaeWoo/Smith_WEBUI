var sTemplate = "<h2><%=title%></h2><div><a href='<%=endPageLink%>'><img src='<%=imgUrl%>'></a></div>"

makeBookElement(sTemplate, aBookList);
//Replace strings

function makeBookElement(sTemplate, aBookList) {
var result;
aBookList.forEach(function(v,i,o) {
result = sTemplate.replace("<%=title%>" , v.name).replace("<%=endPageLink%>",v.src).replace("<%=imgUrl%>",v.imgSrc);
});

return result;

}