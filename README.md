# Jasmine (BDD) test samples and all to know about jasmine

Refferal website for jasmine :: https://jasmine.github.io/

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

It is an open source technology and a simple API to test different components of your JavaScript technology.
This tutorial discusses the basic functionalities of jasmine.js along with relevant examples for easy understanding.

Remember: We only write code when there exists a test that requires that code to exist.

### Who is this tutorial for

 - Those who have basic knowledge in javascript
 - Those who want to get started with tests and don't know where to begin from.
 - Those who have the above two and are willing to learn and *rock* their way to writing awesome *code*


  describe("Code to be \'Krafty\'", function() {
    var awesomeness;

    it("Should be a \'krafty\'-like function", function() {
      awesomeness = true;

      expect(awesomeness).toBe(true);

    });

  });

```
Jasmine can be used for JavaScript, python and Ruby but for now this is a JavaScript alone repo and tutorial

```
Other languages "python and ruby" will come later.

Follow me and keep checking your feed for an update I make on the repo*


### Jasmine Installation

`  npm install jasmine --save-dev  `to declare it as a dependency for development of your module. or `npm install jasmine` to intall it locally in your project

and to install globally to the CLI tool as below

` npm install -g jasmine `

Initialising jasmine project by creating a spec directory configuring json for the project

`jasmine init`

Now with our project directory already set. We will now look start writing our tests.

In Jasmine we have two blocks, the describe and the it block. After which we will then have the cases.

#### The describe block

For demonstration purposes of the syntax we will use a calculator example
The describe block is designed to contain multiple tests. It is not the test itself but groups similar tests together.

It contains the name that is simply understandable and gets to describe your tests as the first argument. We will this further from the console output.
The second argument it takes is a function where our it block and test will be included.

#### The it block

This looks more similar to the describe block where the first argument is a string that easily describes the function we are testing. And the second argument is where the function comes in and the test is included here.

  We can have mmultiple tests in the describe block and also have another describe inside the it block

  Multiple tests in the describe block allows us to group tests that are closely related as we will see below in our test example. On the other hand, a describe block inside a describe block allows us to have very specific tests. The nested describe also comes in handy when we start to think about hooks.
  Don't worry about the scary terms, we will eventually look into them later in this tutorial.

#### The describe and the it block.

  describe('calculate addition', function(){

      it('should be able to add two numbers together', function(){
          console.log('I was able to add two numbers together');
          });

      it('should be able to add more than two numbers together', function(){
          console.log('I was able to add more than two numbers together');
          });

      describe('calculate addition with negative numbers', function(){

          it('it should be able to add two negative numbers together', function(){
              console.log('Yaaay, just added two negative numbers');
              });

          });

      });

#### The expect method call

The expect block is used for validation and confirmation and it is the last step of the test. It shows us a pass or a fail state of a test.
To show this, we will have the previous example of our calculate code modified to show this.



  describe('calculate addition', function(){

      var calculate = new Calculator();

      it('should be able to add two numbers together', function(){
          console.log('I was able to add two numbers together');
          expect(calculate.add(1,4).toBe(5));
          });

      it('should be able to add more than two numbers together', function(){
          console.log('I was able to add more than two numbers together');
          expect(calculate.add(1,2,3).toBe(6));
          });

      describe('calculate addition with negative numbers', function(){

          it('it should be able to add two negative numbers together', function(){
              console.log('Yaaay, just added two negative numbers');
              expect(calculate.add(-1,-2).toBe(-3));
              });

          });

      });

We can also have many test apart form the "toBe()" we've seen. 
Other examples include
 - "not.toBe()"          ~:
 - "toEqual()"            :
 - "toBeLessThan()"       :
 - "toBeGreaterThan()"    :
 - "toBeNull()"           :  All this can have a not to validate the negative expectation.
 - "toBeUndefined()"      :
 - "toBeLessThan()"       :
 - "toBeLessThan()"       :
 - "toBe()"              ~:

#### The before and after hooks

A hook is something that automatically runs when you run your test. It's used for test setup and cleaning data. It is similar to describe and the it block in some way. 

 - We have a before all hook which gets to run before all the tests run, the method for this is written "beforeAll".
 - We also have an after all hook which runs after all the tests run, the method for this is written "afterAll".
 - The before each hook on the other hand runs before each of the tests run and it is written as "beforeEach".
 - Lastly, the after each hook runs after each of the tests run and it is written as "afterEach".


Below is a preview of the syntax of a hook.

 **still using the example we used to show this **
  
  describe('calculate addition', function(){

      beforeAll(function(){
        console.log("This runs before all the tests.")
      });

      beforeEach(function(){
        console.log("This runs before each the tests.")
      });
      
      afterAll(function(){
        console.log("This runs after all the tests.")
      });

      afterEach(function(){
        console.log("This runs after each the tests.")
      });

      var calculate = new Calculator();

      it('should be able to add two numbers together', function(){
          console.log('I was able to add two numbers together');
          });

      it('should be able to add more than two numbers together', function(){
          console.log('I was able to add more than two numbers together');
          });

      describe('calculate addition with negative numbers', function(){

          it('it should be able to add two negative numbers together', function(){
              console.log('Yaaay, just added two negative numbers');
              });

          });

      });

Try copying and pasting then run this code to see what I mean. The output of the above code is as follows.

If you figured, all the tests in the describe block run sequentially unlike the hooks, each hook runs at it's own time depending on the method at hand. Them being above the it test blocks, doesn't determine when and how they are run.
If you are still wondering what the hooks are for and how they are helpful, then this is a recap of what we covered.

The before hooks are mainly helpful in running setup code and avoids code duplication and help maintain similar test steps and conventionally they will be shared across all the tests.
The after hooks are good for doing clean up after the tests run. Thus saving memory and also having each test have a pre-defined setup

Guided by the erros and failures got from our code, the code after following all the tests will look as follows.

    var Calculator = function() {
      return {
        add: function(a,b) {
          return a + b;
         },
        subtract: function(a,b) {
          return a - b;
         },
        divide: function(a,b) {
          return a / b;
         },
        multiply: function(a,b) {
          return a * b;
         },
      }
    }


