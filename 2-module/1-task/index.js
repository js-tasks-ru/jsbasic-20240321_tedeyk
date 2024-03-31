function sumSalary(salaries) {
  let sum =0;
  for (let key in salaries) {
    if (salaries[key] < Infinity 
      && salaries[key] > -Infinity 
      && !Number.isNaN(salaries[key]) 
      && typeof salaries[key] == 'number') {
        sum += salaries[key];
    }
  } return sum;
}












