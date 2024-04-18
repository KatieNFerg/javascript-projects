const checkFive = require('../checkFive.js');

describe("testing output", function(){
    it('checkFive', function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
});