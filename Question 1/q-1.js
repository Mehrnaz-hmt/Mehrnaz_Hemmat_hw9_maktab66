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
    
  convertNewDateToString = formatAMPM(new Date())
  console.log(convertNewDateToString); //turn to string your pc time
  //--------------------------------------------------------------
  
 


