function generateRandomArray(length, even) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 100)); // Adjust the range as needed
  }
  return randomArray;
}

module.exports = generateRandomArray;