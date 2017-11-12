

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

function fuzzyMatch(array, letters){
  let lengthOfName = letters.length;
  return drivers.filter(function(driverName){
    return driverName.slice(0, lengthOfName) === letters;
  })

  }
  // 
  // function fuzzyMatch (list, partialName) {
  //   let lengthOfName = partialName.length;
  //   return list.filter(function (driverName) {
  //     return driverName.slice(0, lengthOfName) === partialName;
  //   });