
function Car(make, model) {

    var _make = make;
    var _model = model;
  

    this.getMake = function() {
      return _make;
    };
  
    this.getModel = function() {
      return _model;
    };

    this.setMake = function(newMake) {
      _make = newMake;
    };
  
    this.setModel = function(newModel) {
      _model = newModel;
    };
  

    this.displayInfo = function() {
      console.log('Make:', _make);
      console.log('Model:', _model);
    };
  }
  

  var myCar = new Car('Toyota', 'Corolla');
  

  console.log(myCar.getMake()); 
  console.log(myCar.getModel()); 
  
  myCar.setMake('Honda');
  myCar.setModel('Civic');
  
  console.log(myCar.getMake()); 
  console.log(myCar.getModel());
  

  myCar.displayInfo();
  