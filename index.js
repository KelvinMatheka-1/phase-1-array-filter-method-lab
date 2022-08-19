function findMatching(drivers, attribute) {
  return drivers.filter(function (driver) { 
    return driver.toLowerCase() === attribute.toLowerCase() })
}

function fuzzyMatch(drivers, attribute) {
  return drivers.filter(driver => driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase())  
  
}

function matchName(drivers, argument) {
  return drivers.filter(function (driver) { 
    return driver.name === argument })
}

function matchName(drivers, argument) {
 return drivers.filter(driver => driver.name === argument)
}
