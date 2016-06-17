//Assert symbolTable and subtables are defined
QUnit.test("MasterTable Exists", function(assert){
  assert.ok(Boolean(masterTable),'Boolean(masterTable)');
  assert.ok(Boolean(masterTable.comp),'Boolean(masterTable.comp)');
  assert.ok(Boolean(masterTable.dest),'Boolean(masterTable.dest)');
  assert.ok(Boolean(masterTable.jump),'Boolean(masterTable.jump)');
  assert.ok(Boolean(masterTable.symbol),'Boolean(masterTable.symbol)');
});


//Binary converter test cases
QUnit.test("Test Binary Converter", function(assert){
  assert.ok(intToBinary(1)    == "1",'intToBinary(1)    == "1"');
  assert.ok(intToBinary(2)    == "10",'intToBinary(2)    == "10"');
  assert.ok(intToBinary(3)    == "11",'intToBinary(3)    == "11"');
  assert.ok(intToBinary(4)    == "100",'intToBinary(4)    == "100"');
  assert.ok(intToBinary(5)    == "101",'intToBinary(5)    == "101"');
  assert.ok(intToBinary(6)    == "110",'intToBinary(6)    == "110"');
  assert.ok(intToBinary(7)    == "111",'intToBinary(7)    == "111"');
  assert.ok(intToBinary(8)    == "1000",'intToBinary(8)    == "1000"');
  assert.ok(intToBinary(9)    == "1001",'intToBinary(9)    == "1001"');
  assert.ok(intToBinary(10)   == "1010",'intToBinary(10)   == "1010"');
  assert.ok(intToBinary(16)   == "10000",'intToBinary(16)   == "10000"');
  assert.ok(intToBinary(32)   == "100000",'intToBinary(32)   == "100000"');
  assert.ok(intToBinary(64)   == "1000000",'intToBinary(64)   == "1000000"');
  assert.ok(intToBinary(128)  == "10000000",'intToBinary(128)  == "10000000"');
  assert.ok(intToBinary(256)  == "100000000",'intToBinary(256)  == "100000000"');
  assert.ok(intToBinary(512)  == "1000000000",'intToBinary(512)  == "1000000000"');
  assert.ok(intToBinary(1024) == "10000000000",'intToBinary(1024) == "10000000000"');
});

//String padding test cases
QUnit.test("Test String Padding", function(assert){
  assert.ok(padString(intToBinary(1),10)    == "0000000001",'padString(intToBinary(1),10)    == "0000000001"');
  assert.ok(padString(intToBinary(2),8)     == "00000010",'padString(intToBinary(2),8)     == "00000010"');
  assert.ok(padString(intToBinary(3),2)     == "11",'padString(intToBinary(3),2)     == "11"');
  assert.ok(padString(intToBinary(4),4)     == "0100",'padString(intToBinary(4),4)     == "0100"');
  assert.ok(padString(intToBinary(5),20)    == "00000000000000000101",'padString(intToBinary(5),20)    == "00000000000000000101"');
  assert.ok(padString(intToBinary(6),0)     == "110",'padString(intToBinary(6),0)     == "110"');
  assert.ok(padString(intToBinary(7),4)     == "0111",'padString(intToBinary(7),4)     == "0111"');
  assert.ok(padString(intToBinary(8),10)    == "0000001000",'padString(intToBinary(8),10)    == "0000001000"');
  assert.ok(padString("hey",5)              == "00hey",'padString("hey",5)              == "00hey"');
  assert.ok(padString("hey",5,"1")              == "11hey",'padString("hey",5,"1")              == "11hey"');
  assert.ok(padString("hey")              == "0000000000000hey",'padString("hey",5)              == "0000000000000hey"');
});
