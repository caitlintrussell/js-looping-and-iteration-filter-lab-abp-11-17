

function findMatching(drivers, name){
  let matchingDriver =  drivers.filter(function(driver){
    if (name === driver){
      return true;
    }
    else {
      return false;
    }
  
  })
  return matchingDriver;
}
