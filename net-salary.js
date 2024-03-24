
/**
 * Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

**NB:** Use KRA, NHIF, and NSSF values provided in the link below.

- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)

 */




// Used the readline module to prompt for  an input

// But with help of a friend since i was not understanding how readline module  works
    
    const readline = require("readline");

    const rl = readline.createInterface({
  
      input: process.stdin,
  
      output:process.stdout
    })
    
    rl.question("Enter basic salary:",(basicSalary)=>{
        // prompts for basic salary

        rl.question("Enter benefits:", (benefits)=>{
        // prompts for benefits

        const result = calculateSalary(parseFloat(basicSalary),parseFloat(benefits));
        // parses the results as floats 

            console.log("\nsalary Breakdown ");
            // breaks down the salary
            
            for (const key in result){
                console.log(`${key}: ${result[key]}`);
            }
            rl.close ();
        });
    });
    
    //function to calculate and display net salary
    function calculateSalary(basicSalary, benefits){

    // least earn for one to be tax is 
        const taxThreshold = 24000;

    // tax rate for anyone with salaryof 2400 is 10/100
        const taxRate = 0.1;

    // Nhif rate is 2.75/100
        const nhifRate = 0.0275;

    //nssf rates is 6/100
        const nssfRate = 0.06;

    //calculate gross calary
        const grossSalary = basicSalary + benefits;

    // calculating taxableIncome
        const taxableIncome = Math.max(0, grossSalary - taxThreshold);

    // calculating tax
        const tax = taxableIncome>0 ? taxableIncome * taxRate :0;

    // calculating nhifDeduction
        const nhifDeductions = basicSalary* nhifRate;

    // calculating nssffDeduction
        const nssfDeduction = basicSalary * nssfRate;
    
    // calculating netSalary
        const netSalary =grossSalary-tax- nhifDeductions-nssfDeduction;

    // the output on the terminal 
    return{
        " Gross Salary": grossSalary,
        "Tax": tax,
        "NHIF Deductions": nhifDeductions,
        "NSSF Deductions": nssfDeduction,
        "Net Salary": netSalary
    };
}
