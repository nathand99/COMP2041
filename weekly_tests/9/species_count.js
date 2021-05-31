function species_count(target_species, whale_list) {

  // PUT YOUR CODE HERE
  let count = 0;
  whale_list.forEach(element => {
    if (element.species === target_species) {
        count = parseInt(count) + parseInt(element.how_many);
    }
  });
  return count;
}
// can also do a while loop: whale_list[i]
module.exports = species_count;
