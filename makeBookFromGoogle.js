function takeObjectFromGoogle() {
  var result = "";
  var name = document.getElementsByClassName('cover-image');
  var pageLink = document.getElementsByClassName('card-click-target');
  var writer = document.getElementsByClassName('subtitle');
  var price = document.getElementsByClassName('price buy');

  for (var i=0, j=0; i<12; i++, j += 4) {
    if (i<6) continue;
    else {
      result += "\n{\n";
      result += "\tName : \"" + name[i].alt + "\",\n";
      result += "\tImageLink : \"" + name[i].src + "\",\n";
      result += "\tPageLink : \"" + pageLink[j].href + "\",\n";
      result += "\tWriter : \"" + writer[i].title + "\",\n";
      result += "\tWriterLink : \"" + writer[i].href + "\",\n";
      result += "\tPrice : \"" + price[j].innerText.replace('��','').replace('  ', '').replace('  ', '') + "\",\n";
    }

    if (i < 11)
      result += "},";
    if (i == 11)
      result += "}\n";
  }
  return result;
}

var result = takeObjectFromGoogle();

result;