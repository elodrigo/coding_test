function generateRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 100)); // Adjust the range as needed
  }
  return randomArray;
}

module.exports = generateRandomArray;