function jType(mainArray) {
    mainArray.forEach(function(item) {
        var tagA = $(item);
        var tagAStr = '';
        var tagAArr = [];
        if (tagA[0]) {
          tagAStr = getContents(item);
          tagAArr = str2Arr(tagAStr);
            // console.log(tagAArr);
        }
    });
}
function getContents(item){
  if($(item)[0]){
    return $(item).html();

  }
}
function str2Arr(str){
  return str.split("");
}
