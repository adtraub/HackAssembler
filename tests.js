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
  assert.equal(intToBinary(1), "1");
  assert.equal(intToBinary(2), "10");
  assert.equal(intToBinary(3), "11");
  assert.equal(intToBinary(4), "100");
  assert.equal(intToBinary(5), "101");
  assert.equal(intToBinary(6), "110");
  assert.equal(intToBinary(7), "111");
  assert.equal(intToBinary(8), "1000");
  assert.equal(intToBinary(9), "1001");
  assert.equal(intToBinary(10), "1010");
  assert.equal(intToBinary(16), "10000");
  assert.equal(intToBinary(32), "100000");
  assert.equal(intToBinary(64), "1000000");
  assert.equal(intToBinary(128), "10000000");
  assert.equal(intToBinary(256), "100000000");
  assert.equal(intToBinary(512), "1000000000");
  assert.equal(intToBinary(1024), "10000000000");
});

//String padding test cases
QUnit.test("Test String Padding", function(assert){
  assert.equal(padString(intToBinary(1),10), "0000000001");
  assert.equal(padString(intToBinary(2),8),  "00000010");
  assert.equal(padString(intToBinary(3),2),  "11");
  assert.equal(padString(intToBinary(4),4),  "0100");
  assert.equal(padString(intToBinary(5),20), "00000000000000000101");
  assert.equal(padString(intToBinary(6),0),  "110");
  assert.equal(padString(intToBinary(7),4),  "0111");
  assert.equal(padString(intToBinary(8),10), "0000001000");
  assert.equal(padString("hey",5), "00hey");
  assert.equal(padString("hey",5,"1"), "11hey");
  assert.equal(padString("hey"), "0000000000000hey",'Check default parameters');
});

//String to Array test cases
QUnit.test("Test String to Array", function(assert){
  //assert.ok(stringToArray("Helloworld\nThis is a test") ==["Helloworld","This is a test"]);
  //assert.ok(stringToArray("This is a test\nHello Adam") ==["This is a test","Hello Adam"]);
  assert.deepEqual(stringToArray("This is a test\nHello Adam"), ["This is a test","Hello Adam"], "standard string to array test");
  assert.deepEqual(stringToArray("Helloworld\nThis is a test"), ["Helloworld","This is a test"], "standard string to array test");
  assert.deepEqual(stringToArray("Helloworld\n\nThis is a test"), ["Helloworld","This is a test"],"assert blank lines are discarded");
});
