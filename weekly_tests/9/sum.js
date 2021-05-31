function sum(list) {

  // PUT YOUR CODE HERE
  let sum = 0;
  list.forEach(element => {
    sum = parseInt(sum) + parseInt(element);
  });
  return sum

}

module.exports = sum;
