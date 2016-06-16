//Assert symbolTable and subtables are defined
QUnit.test("SymbolTables Exists", function(assert){
  assert.ok(Boolean(symbolTable));
  assert.ok(Boolean(symbolTable.comp));
});


//Binary converter test cases
QUnit.test("Test Binary Converter", function(assert){
  assert.ok(intToBinary(1)    == "1");
  assert.ok(intToBinary(2)    == "10");
  assert.ok(intToBinary(3)    == "11");
  assert.ok(intToBinary(4)    == "100");
  assert.ok(intToBinary(5)    == "101");
  assert.ok(intToBinary(6)    == "110");
  assert.ok(intToBinary(7)    == "111");
  assert.ok(intToBinary(8)    == "1000");
  assert.ok(intToBinary(9)    == "1001");
  assert.ok(intToBinary(10)   == "1010");
  assert.ok(intToBinary(16)   == "10000");
  assert.ok(intToBinary(32)   == "100000");
  assert.ok(intToBinary(64)   == "1000000");
  assert.ok(intToBinary(128)  == "10000000");
  assert.ok(intToBinary(256)  == "100000000");
  assert.ok(intToBinary(512)  == "1000000000");
  assert.ok(intToBinary(1024) == "10000000000");
});

//String padding test cases
QUnit.test("Test String Padding", function(assert){
  assert.ok(padString(intToBinary(1),10)    == "0000000001");
  assert.ok(padString(intToBinary(2),8)     == "00000010");
  assert.ok(padString(intToBinary(3),2)     == "11");
  assert.ok(padString(intToBinary(4),4)     == "0100");
  assert.ok(padString(intToBinary(5),20)    == "00000000000000000101");
  assert.ok(padString(intToBinary(6),0)     == "110");
  assert.ok(padString(intToBinary(7),4)     == "0111");
  assert.ok(padString(intToBinary(8),10)    == "0000001000");
  assert.ok(padString("hey",5)              == "00hey");
});
