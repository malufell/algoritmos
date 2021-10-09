function insertionSort(list) {
    for (let i = 1; i < list.length; i++) {
  
      let elem = list[i];
      let indexLeft = i - 1;
  
      while (indexLeft >= 0 && list[indexLeft] > elem) {
        list[indexLeft + 1] = list[indexLeft];
        indexLeft--;
      }
  
      list[indexLeft + 1] = elem;
    };
    return list;
};

const list = [3, 5, 4, 8, 10, 1];
console.log(insertionSort(list));
