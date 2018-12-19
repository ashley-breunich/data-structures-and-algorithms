var myMap = new Map();
var keyObj = {};
myMap.set(keyObj, 'value');
myMap.get(keyObj); 

for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}