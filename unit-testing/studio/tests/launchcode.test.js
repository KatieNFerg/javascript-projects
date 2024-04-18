// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function () {
  test("should have organization key with value 'nonprofit'", function () {
    expect(launchcode.organization).toEqual('nonprofit')
  });
  test("should have executiveDirector key with value 'Jeff'", function () {
    expect(launchcode.executiveDirector).toEqual('Jeff')
  });
  test("should have percentageCoolEmployees key with a value '100'", function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  });
  test('should have programsOffered key with a value ', function () {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
      expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
      expect(launchcode.programsOffered[2]).toEqual("Liftoff");
      expect(launchcode.programsOffered.length).toEqual(3);
     });
     test('when passed a number that is only divisible by 2, launchoutput returns launch', function() {
      expect(launchcode.launchOutput(2)).toEqual('Launch!');
     });
     test('when passed a number that is only divisible by 3, launchOutput returns code', function(){
      expect(launchcode.launchOutput(3)).toEqual('Code!');
     });
     test('when passed a number that is only divisible by 5, launchOutput returns rock', function(){
      expect(launchcode.launchOutput(5)).toEqual('Rocks!');
     });
     test('when passed a number that is divisible by 2 and 3, launchOutput returns launchcode', function() {
      expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
     });
     

});
