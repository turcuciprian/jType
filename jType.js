var globalArr,  globalItem, globalSpeed ,  globalPos, globalTagAArr,globalMainArr;

var gItemID = 0;
var timerx;

function jType(mainArray, args) {
    args = (typeof args === []) ? [] : args;
    mainArray = (typeof mainArray === undefined) ? globalMainArr : mainArray;
    console.log(mainArray[gItemID]);
    globalMainArr = mainArray;
        globalItem = mainArray[gItemID];
        var tagA = jQuery(globalItem);
        var tagAStr = '';
        var tagAArr = [];
        if (tagA[0]) {
            //got the contents of the div
            tagAStr = getContents(globalItem);
            //turned the contents string in a array
            tagAArr = str2Arr(tagAStr);
            //deleted the contents of the div
            tagA.html('');

            // instantiating globals
            globalSpeed = getRandomArbitrary(args["speed"]/2,args["speed"]);
            globalPos = 0;
            globalTagAArr = tagAArr;
            addCharacter();
        }
};

function getContents(jItem) {
    if (jQuery(jItem)[0]) {
        return jQuery(jItem).html();

    }
}

function str2Arr(str) {
    return str.split("");
}

function addCharacter() {
var jItem = jQuery(globalItem);
  if(jItem[0]){
    jItem.append(globalTagAArr[globalPos]);

  }
    globalPos++;
    if(globalPos < globalTagAArr.length){
      timerx = setTimeout(addCharacter,globalSpeed);
    }else{
      gItemID++;

      jType(globalMainArr,{'speed':globalSpeed});
    }


}
//min max random
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
