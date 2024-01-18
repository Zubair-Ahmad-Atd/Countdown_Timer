  import { differenceInSeconds, setSeconds } from 'date-fns';
  import inquirer from 'inquirer';

 
//  console.log(testDate);

//  let date = ("0" + testDate.getDate()).slice(-2);
//  let month = ("0" +(testDate.getMonth() +1)).slice(-2);
//  let year = testDate.getFullYear();
//  let hour = testDate.getHours();
//  let minutes = testDate.getMinutes();
//  let seconds = testDate.getSeconds();

//  console.log(date);
//  console.log(month);
//  console.log(year);
//  console.log(hour);
//  console.log(minutes); 
//  console.log(seconds); 
//  let timerSecond = 50 - seconds 
//  setTimeout(()=>{ 

//  },)
 

//  console.log(hour + "-"+minutes + "-"+ seconds);



//  let date = new Date("2023-01-15");
//  let date1 = new Date(24 * 60 * 60 *1000)
//  console.log(date1);
 
 

// let timer = setInterval(()=>{ 
//     let date = new Date();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds(); 
//     console.log(`Hours:${hour},Minutes:${minutes},Seconds:${seconds}`);
    
// },1000)    


let user = await inquirer.prompt({ 
   type:"number",
   name:"userInput",
   message: "Enter time in seconds"
}) 
 let input = user.userInput;
//  console.log(input);
 

 function startTimer(val:number){ 
    let date = new Date()
    let date2 = new Date().setSeconds((date.getSeconds())+ val); 
    let date3 = new Date(date2) 
    console.log(date3);
    
    

     
    setInterval(()=>{  
        let currentDate = new Date();
        console.log(currentDate);
        
        let timeDiff = differenceInSeconds(date2,currentDate)
        console.log(timeDiff);
        
        let min = Math.floor((timeDiff%(3600 * 24))/3600)
        let sec = Math.floor(timeDiff% 60);
        console.log(sec);
        
      if(sec <= 0){ 
        console.log("Timer has expired");
        process.exit()
        
      } else{ 
         
        console.log(`${min}:${sec}`);
        
      }
    
    },1000)
 } 
 startTimer(input) 



// let date = new Date();
// let date2 = new Date().setSeconds((date.getSeconds()) + 5)
// let date3 = new Date(date2)
// let mon = date.getMonth();
// let day = date.getDay();
// let year = date.getFullYear();
// let hour = date.getHours();
// let min= date.getMinutes();
// let sec = date.getSeconds();
// let time = date.getTime();
// console.log(date);
// console.log(date3);

// console.log(day,"day");
// console.log(hour,"hour");

// console.log(min,"minutes");
// console.log(sec,"seconds");
// console.log(time,"Time");














 
 
 
 
 
 
 
 
 