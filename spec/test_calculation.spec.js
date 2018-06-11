class Calculate {

  add(a,b) {
    return a + b;

  };
  subtract(a,b) {
    return a - b;

  };
  divide(a,b) {
    return a / b;

  };
  multiply(a,b) {
    return a * b;

  };

};

var calculate = new Calculate();

describe('calculate addition', function() {

  it('should be able to add two numbers together', function(){
    expect(calculate.add(1,4)).toBe(5);

  });

  it('should be able to add more than two numbers together', function(){
    expect(calculate.add(1,2)).toBe(3);

  });

  describe('calculate addition with negative numbers', function(){

    it('it should be able to add two negative numbers together', function(){
      expect(calculate.add(-1,-2)).toBe(-3);

    });

  });

});



