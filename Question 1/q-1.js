let xDate = "8:45 PM";
function strToArr(str) {
  let arr = str.split(" ");
  let brokenArr = arr[0].split(":");

  if (arr[1] == "AM" && brokenArr[0] > 7 && brokenArr[0] <= 11) {
    let resultArr = [];
    let getHours = 11 - +brokenArr[0];
    let getMinutes = +brokenArr[1];

    resultArr.push(getHours, getMinutes);

    console.log(resultArr);
  } else if (arr[1] == "AM" && brokenArr[0] > 7 && brokenArr[0] <= 12) {
    let resultArr = [];
    let getHours = 12 - +brokenArr[0];
    let getMinutes = +brokenArr[1];

    resultArr.push(getHours, getMinutes);

    console.log(resultArr);
  } else if (arr[1] == "PM" && brokenArr[0] >= 1 && brokenArr[0] <= 7) {
    let resultArr = [];
    let getHours2 = 7 - (+brokenArr[0]);
    let getMinutes2 = 60 - (+brokenArr[1]);
    resultArr.push(getHours2, getMinutes2);
    return resultArr;
  } else if (arr[1] == "PM" && brokenArr[0] >= 7 && brokenArr[0] <= 12) {
    let resultArr = [];
    let getHours2 = 12 - (+brokenArr[0]);
    let getMinutes2 = 60 - (+brokenArr[1]);
    if(getHours2==6) {
      getMinutes2 = 0;
    }
    else if(+brokenArr[1]==0){
      getMinutes2 = 0;
    }else {
    //   let getHours2 = 12 - (+brokenArr[0]);
    // let getMinutes2 = 60 - +brokenArr[1];
    resultArr.push(getHours2, getMinutes2);
    }
    // resultArr.push(getHours2, getMinutes2);
    return resultArr;
  }
  return arr; //output :['12:35', 'PM']
}

console.log(strToArr(xDate));

//----------------------------------------------------------------

