const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
    let convertNewDateToString = "";
    
  convertNewDateToString = formatAMPM(new Date())  //turn to string your pc time  ورودی ما
  console.log(convertNewDateToString); 
//-------------------------------------------------------------------
function sayRemainTimeToEat (str) {
  let strToArray = str.split(" ");
  let firstIndexOfArr = strToArray[0][0]  //1
  let secondIndexArr = strToArray[0][0] + strToArray[0][1]  //11
 if (str.includes("PM")) {
  
 }
return secondIndexArr
}
console.log(sayRemainTimeToEat(("11:00 AM")))
//--------------------------------------------------------------
//   const date1 = new Date('7/13/2010');
//   const date2 = new Date('12/15/2010');
//   console.log(getDifferenceInDays(date1, date2));
//   console.log(getDifferenceInHours(date1, date2));
//   console.log(getDifferenceInMinutes(date1, date2));
//   console.log(getDifferenceInSeconds(date1, date2));
  
//   function getDifferenceInDays(date1, date2) {
//     const diffInMs = Math.abs(date2 - date1);
//     return diffInMs / (1000 * 60 * 60 * 24);
//   }
  
//   function getDifferenceInHours(date1, date2) {
//     const diffInMs = Math.abs(date2 - date1);
//     return diffInMs / (1000 * 60 * 60);
//   }
  
//   function getDifferenceInMinutes(date1, date2) {
//     const diffInMs = Math.abs(date2 - date1);
//     return diffInMs / (1000 * 60);
//   }
  
//   function getDifferenceInSeconds(date1, date2) {
//     const diffInMs = Math.abs(date2 - date1);
//     return diffInMs / 1000;
//   }
//   var diff = Math.abs(new Date('2011/10/09 12:00') - new Date('2011/10/09 00:00'));
//   console.log(diff)
//   var timestamp = 9462;

// // 2
// var hours = Math.floor(convertNewDateToString/ 60 / 60);
// console.log(hours)
//---------------------------------------------------------------
//   function tiime () {
//     let time_start = new Date();
//     let time_end = new Date();
//     let value_start = "06:00:00".split(':');
//     let value_end = "23:00:00".split(':');
//     console.log(value_end)   //returns  ['23', '00', '00']
//     time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
//     time_end.setHours(value_end[0], value_end[1], value_end[2], 0)
    
//    return  time_end - time_start // millisecond
//   }
 
// console.log(tiime()) //returns 61200000
