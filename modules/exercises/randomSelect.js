function randomFromArray(arr){
let randIndex = Math.floor(Math.random() * arr.length);
return arr[randIndex];
}

module.exports = {
  randomFromArray: randomFromArray
};
