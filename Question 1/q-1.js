function strToArr(str) {
  let arr = str.split(" ");
  let brokenArr = arr[0].split(":");

  if (arr[1] == "AM" && brokenArr[0] > 7 && brokenArr[0] <= 11) {
    let resultArr = [];
    let getHours = 11 - +brokenArr[0];
    let getMinutes =60-( +brokenArr[1]);

    resultArr.push(getHours, getMinutes);
    return resultArr
    
  }
  //=================================================================================================== 
   else if (arr[1] == "AM" && brokenArr[0] > 7 && brokenArr[0] <= 12) {
    let resultArr = [];
    let getHours = 12 - +brokenArr[0];
    let getMinutes = +brokenArr[1];

    resultArr.push(getHours, getMinutes);

    console.log(resultArr);
  }
  //=================================================================================================== 
else if (arr[1] == "AM" && brokenArr[0] >= 1 && brokenArr[0] <= 7 ) {
  let resultArr = [];
  let getHours = 6 - (+brokenArr[0]);
  let getMinutes = 60 - (+brokenArr[1]);

  resultArr.push(getHours, getMinutes);

  return resultArr;
}
//=================================================================================================== 
else if (arr[1] == "PM" && brokenArr[0] == 12 ) {
  let resultArr = [];
  let getHours2 = 6;
  let getMinutes2 = 60 - (+brokenArr[1]);
  
  resultArr.push(getHours2, getMinutes2);
  return resultArr;
}
//=================================================================================================== 
  else if (arr[1] == "PM" && brokenArr[0] >= 1 && brokenArr[0] <= 7) {
    let resultArr = [];
    let getHours2 = 7 - (+brokenArr[0]);
    let getMinutes2 = 60 - (+brokenArr[1]);
    
    resultArr.push(getHours2, getMinutes2);
    return resultArr;
  } 

//=================================================================================================== 
  else if (arr[1] == "PM" && brokenArr[0] >= 7 && brokenArr[0] <= 12) {
    let resultArr = [];
    let getHours2 = 12 - (+brokenArr[0]);
    let getMinutes2 = 60 - (+brokenArr[1]);
    if(getHours2==6) {
      getMinutes2 = 0;
    }
  
  //=================================================================================================== 
else if (arr[1] == "PM" && brokenArr[0] >= 1 && brokenArr[0] <= 7) {
  let resultArr = [];
  let getHours2 = 7 - (+brokenArr[0]);
  let getMinutes2 = 60 - (+brokenArr[1]);
  resultArr.push(getHours2, getMinutes2);
  return resultArr;
}
  //=================================================================================================== 

    else if(+brokenArr[1]==0){
      getMinutes2 = 0;
    }else {
  
    resultArr.push(getHours2, getMinutes2);
    }
   
    return resultArr;
  }
  return arr;
}

console.log(strToArr("10:15 AM")); //[1, 45]
console.log(strToArr("8:40 PM")); //[4, 20]
console.log(strToArr("12:40 PM")); // [6,20]
console.log(strToArr("12:30 PM")); //[6:30] 
console.log(strToArr("3:30 AM")); //[3, 30]
console.log(strToArr("6:50 AM")); //[0, 10]
//----------------------------------------------------------------

