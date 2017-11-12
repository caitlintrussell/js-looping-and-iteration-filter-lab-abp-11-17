

function findMatch(drivers, name){
  drivers.filter(function(driver){
    if (driver.toLowerCase() === name.toLowerCase()){
      return driver;
    }
      
  )  
  }
}