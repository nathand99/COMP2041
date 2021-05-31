function total_bill(bill_list) {

  // PUT YOUR CODE HERE
  price = 0;
  bill_list.forEach(object => {
    object.forEach(element => {
      price = parseFloat(price) + parseFloat(element.price.slice(1));
    });
  });
  return price;

}

module.exports = total_bill;
