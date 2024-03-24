// Used the readline module to prompt for  an input

// But with help of a friend since i was not understanding how readline module  works

const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,

  output:process.stdout
})


const promptUser =() =>{

    /// prompts for marks
    rl.question("please enter student's the marks: " , (userInput) =>{

     if (userInput.toLocaleLowerCase()==="exit"){
     
      rl.close();
      return
    }
    
    console.log(calculateGrade(userInput))
    promptUser();
  }
    )
    
  }

  promptUser()


//function declaration
function calculateGrade(marks){

    // declare an empty  variable grade

    let grade = ""

    if  (marks > 100 || marks < 0) {

    // makes sure the marks are between 100 and 0

        grade = "Invalid"
    }
    

     else if (marks > 79) {
    // checks if the marks is greater than 79
    
        grade = "A";


    } else if (marks >= 60 && marks <= 79 ) {

    // checks if the marks is greater than  or equal 60 but less than or equal to 79 to output grade B

        grade = "B";

    } else if (marks >= 49 && marks <=59 ) {
    // checks if the marks is greater than or equal to 49  but less than or equal to 59 to output grade c

        grade = "C";


    } else if (marks >= 40  && marks < 49) {
    // checks if the marks is greater than or equal to 40  but less than  or equal to 59 to output grade c

        grade = "D";


    } else  {

    //  checks if marks is less tha 40

        grade = "E";

    }
    // the output on the terminal 
    return grade 
}



 

