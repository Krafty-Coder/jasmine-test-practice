describe('Login', function(){
  var user;

  beforeEach(function() {
    user = new User();
  });

  it("Should exist", function() {
    expect(user).toBeDefined();
    expect(user).not.toBeNull();
  });

  it("Should be able to create User", function() {
    expect(user.createUser).toBeDefined();
    expect(user.createUser("Krafty", "Kcoder", "Kcoder")).not.toBeNull();
    expect(user.createUser("Krafty", "Kcoder", "Kcoder")).toBe("Logged in successfully");
    expect(user.createUser("Krafty", "KraftyCoder", "Kcoder")).toBe("Please Confirm your password input");
    expect(user.createUser("Kr", "Kcoder", "Kcoder")).toBe("Put a lengthy name, your name");

  });

  it('should be able to validate password', function(){
    user.createUser("Krafty", "nastyC", "nastyC");
    expect(user.password).toBe("nastyC");
  });

  describe('validate password and username', function(){

    it('it should validate password and username', function(){
      user.createUser("quavo", "nastyC", "nastyC");
      expect(user.name).toEqual("quavo");
    });

  });

  //A simple test to verify the Users service exists
  it('should exist', function() {
    expect(user).toBeDefined();
  });

  // A set of tests for our Users.all() method
  describe('.all()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(user.all).toBeDefined();
    });

  });

});


