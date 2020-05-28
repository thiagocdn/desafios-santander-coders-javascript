function acontece(students, minimumQuantity) {
  let countInTime = 0;
  for (const student of students){
    if (student <= 0){
      countInTime += 1;
    }
  }
  return countInTime >= minimumQuantity
}

function aberturas(daysArrivals, minimumQuantity){
  let finalArray = [];
  for (const day of daysArrivals){
    finalArray.push(acontece(day, minimumQuantity));
  }
  return finalArray;
}
