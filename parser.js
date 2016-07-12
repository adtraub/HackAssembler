var masterTable = {
     comp : {
       "0"  :"101010"
      ,"1"  :"111111"
      ,"-1" :"111010"
      ,"D"  :"001100"
      ,"A"  :"110000"
      ,"M"  :"110000"
      ,"!D" :"001101"
      ,"!A" :"110001"
      ,"!M" :"110001"
      ,"-D" :"001111"
      ,"-A" :"110011"
      ,"-M" :"110011"
      ,"D+1":"011111"
      ,"A+1":"110111"
      ,"M+1":"110111"
      ,"D-1":"001110"
      ,"A-1":"110010"
      ,"M-1":"110010"
      ,"D+A":"000010"
      ,"A+D":"000010"
      ,"D+M":"000010"
      ,"M+D":"000010"
      ,"D-A":"010011"
      ,"A-D":"000111"
      ,"D-M":"010011"
      ,"M-D":"000111"
      ,"D&A":"000000"
      ,"A&D":"000000"
      ,"D&M":"000000"
      ,"M&D":"000000"
      ,"A|D":"010101"
      ,"D|A":"010101"
      ,"M|D":"010101"
      ,"D|M":"010101"
    }
    ,dest : {
       "null":"000"
      ,"M"   :"001"
      ,"D"   :"010"
      ,"MD"  :"011"
      ,"DM"  :"011"
      ,"A"   :"100"
      ,"AM"  :"101"
      ,"MA"  :"101"
      ,"AD"  :"110"
      ,"DA"  :"110"
      ,"AMD" :"111"
      ,"ADM" :"111"
      ,"DAM" :"111"
      ,"DMA" :"111"
      ,"MDA" :"111"
      ,"MAD" :"111"
    }
    ,jump : {
       "null":"000"
      ,"JGT" :"001"
      ,"JEQ" :"010"
      ,"JGE" :"011"
      ,"JLT" :"100"
      ,"JNE" :"101"
      ,"JLE" :"110"
      ,"JMP" :"111"
    }
    ,symbol:{
       "SP"  : padString(intToBinary(0),16)
      ,"LCL" : padString(intToBinary(1),16)
      ,"ARG" : padString(intToBinary(2),16)
      ,"THIS": padString(intToBinary(3),16)
      ,"THAT": padString(intToBinary(4),16)
  }
}

/**
 * Given a base ten integer,
 * returns its binary equivalent
 *
 * @param  {int} intToConvert base ten integer
 * @return {String}  String representation of the input's binary value
 */
function intToBinary(intToConvert){
  return intToConvert.toString(2);
}

function padString(stringToPad, totalLength="16", charToPad="0"){
  return (stringToPad).length >= totalLength ? stringToPad : padString(charToPad + stringToPad, totalLength, charToPad);
}

function stringToArray(splitString) {
    var arrOfStrings = splitString.split('\n'); //split the array into strings based on new lines
    var cleanArray = []; //create a new array to hold the good strings
    for(var i=0; i<arrOfStrings.length; i++){ //Look at every string in the arr of strings
      var currentString = arrOfStrings[i];//the current string we're looking at is currentString
      var stringWithoutWhiteSpace = currentString.trim();//remove leading and trailing spaces from it
      if(stringWithoutWhiteSpace != ""){//if the string without extra spaces isn't blank
        cleanArray.push(stringWithoutWhiteSpace);  //push that string to the end of our clean array
      }
    } //after we finished looking at all the strings in arrOfStrings
    return cleanArray; //return the array of clean strings
}

function removeCommentsFromArray(arrOfStrings){
  var cleanArray = []; //create a new array to hold the good strings
  for (var i=0; i<arrOfStrings.length; i++){ //Look at every string in the arr of strings
    var currentString = arrOfStrings[i]; //the current string we're looking at is currentString
    var commentLocation = currentString.indexOf("//"); //finding the location the comment starts in currentString

    if (commentLocation != -1){ //if there is a comment in the string
      var currentString = currentString.slice(0,commentLocation).trim(); //remove the comment
    }

    if(currentString.length > 0){ //if there is any content in currentString
      cleanArray.push(currentString); //add it to the cleanArray
    }
  }
  return cleanArray; //returns the array of comment-free strings
}

