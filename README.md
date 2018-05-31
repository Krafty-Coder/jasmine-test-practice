# Jasmine (BDD) test samples and all to know about jasmine

Refferal website for jasmine :: https://jasmine.github.io/

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

```
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
```
Follow me and keep checking your feed for an update I make


### Jasmine Installation

`  npm install jasmine --save-dev  `to declare it as a dependency for development of your module. or `npm install jasmine` to intall it locally in your project

and to install globally to the CLI tool as below
`
  npm install -g jasmine

`

Initialising a project for jasmine by creating a spec directory and and configuring json for the project

`jasmine init`




