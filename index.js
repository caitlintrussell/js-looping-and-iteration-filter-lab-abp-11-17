

function findMatching(drivers, name){
  let matchingDriver =  drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true;
    }
    else {
      return false;
    }

  })
  return matchingDriver;
}

function fuzzyMatch(){
  
  }
