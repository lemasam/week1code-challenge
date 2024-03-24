
/**
 * Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
 */


// Used the readline module to prompt for  an input

// But with help of a friend since i was not understanding how readline module  works

    const readline = require("readline");

    const rl = readline.createInterface({

      input: process.stdin,

      output:process.stdout
    })



      const promptUser =() =>{

        // // prompts for speed 
        rl.question("please enter the speed: " , (userInput) =>{

        if (userInput.toLocaleLowerCase()==="exit"){
        
          rl.close();
          return
        }
        
        console.log(speedCheck(userInput))
        promptUser();
      }
        )
        
      }

      promptUser()

        //function declaration
      function speedCheck(speed){

        // Checks if speed is < or = 70
          if  (speed <= 70 ){
        //output should be ok
            return  "OK"; 

        // 
        
          }
        // checks if  speed is above 70, then it will calculate demerit points

          else if ((demeritpoints = (speed - 70) / 5) <=12){

        //checks if demerit points are less than or equal to 12, ten to it willreturn points

            return  `points :${demeritpoints}`; 
            
          }
        // checks if  demerit points are >= 12, then it will return "License suspended"
          else {
        // output should be license suspended
            return "License suspended";
          }
    
        }
