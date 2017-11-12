

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

function fuzzyMatch(drivers, letters){
  let fuzzyMatchingDriver = drivers.filter(function(driverName){
    if (letters === driverName.slice(0,1)){
      return driver;
    } else {
    return false }
  })
return fuzzyMatchingDriver;
  }
