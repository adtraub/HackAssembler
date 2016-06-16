var symbolTable = {
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
  ,custom:{}
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

function padString(stringToPad, totalLength){ 
  return (stringToPad).length >= totalLength ? 
  stringToPad : padString("0" + stringToPad, totalLength);
}
