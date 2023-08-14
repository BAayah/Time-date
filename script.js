// let date = new Date()

// console.log(date.getTime())

// let date ={
//     month:"08",
//     minute:21,
// }

let clock = () => {
  let date = new Date();
  let month_num = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  if (month_num < 9) month_num = "0" + month_num;
  if (hours < 9) hours = "0" + hours;
  if (minutes < 9) minutes = "0" + minutes;
  if (second < 10) second = "0" + second;

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(month[month_num]);
  // let date_time = "Today : "+ day +"-"+ month[month_num]+"-"+hours+":"+minutes+":"+second

  let date_time = `

     <div class="Clock">
        <p class="Text">Today:</p>
        <div class="date">
        <p>${day}</p>-
        <p>${month_num}</p>
      </div>
      <div class="Hours"> 
        <p>${hours}</p>:
        <p>${minutes}</p>:  
        <p>${second}</p>
        </div>
      </div>    
    `;

  // console.log(date_time)
  let element = (document.getElementById("time").innerHTML = date_time);
  console.log(element);
  setTimeout(() => {
    clock();
  }, 1000);
};

clock();
