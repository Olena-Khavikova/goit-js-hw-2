const a = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const b = [5, 10, 15];

const getItemsString = function (array) {
  let result = '';
    for (let i = 0; i < array.length; i += 1) {
      result += `${i + 1} - ${array[i]}\n`;
    }
  return result;
};
console.log(getItemsString(a));
console.log(getItemsString(b));

