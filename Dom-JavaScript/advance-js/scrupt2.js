const temperatureData = {
    'New York': 20,
    
    'London': 18,
    
    'Paris': 22,
    
    'Tokyo': 25,

    'Sydney': 28,
    };

function createTemperatureCache() {
  const cache = {};
  return function getTemperatureForCity(cityName) {
    if (cache[cityName] !== undefined){
        // Name exists in the memory return it
        return cache[cityName]
    } else {
        const temp = temperatureData[cityName]
        cache[cityName] = temp
        return temp
    }
  };
}

const temperature = createTemperatureCache()

console.time();
const temp = temperature('tokyo')
console.log(temp);
console.timeEnd()