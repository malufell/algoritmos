function selectionSort(list) {
  let indexMin;

  for (let i = 0; i < list.length - 1; i++) {
    indexMin = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[indexMin] > list[j]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      let temp = list[i];
      list[i] = list[indexMin];
      list[indexMin] = temp;
    }
  }

  return list;
};

const list = [10, 5, 3, 8, 9, 0, 4];
console.log(selectionSort(list));
