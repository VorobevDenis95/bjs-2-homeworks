function getArrayParams(...arr) {
  let min = arr[0], max = arr[0], sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, element) => sum + element);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return (Math.max(...arr) - Math.min(...arr));
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0, 
      sumOddElement = 0;
      for (let i = 0; i < arr.length; i++) {
      (arr[i] % 2 === 0) ? sumEvenElement += arr[i] : sumOddElement += arr[i];  
      }
      return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0, 
      countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const maximum = func(...arrOfArr[i]);
    if(maxWorkResult < maximum){
      maxWorkResult = maximum;
    }
  }
  return maxWorkResult;
}