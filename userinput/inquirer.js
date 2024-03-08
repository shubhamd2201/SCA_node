import inquirer from "inquirer";

inquirer.prompt([{name:'favmove', message: "what is your favorite movie"}])
.then((answer)=>{
    console.log(answer);
});


// for setting default value 
// put default key in inquirer.prompt()

inquirer.prompt([{name:'favmove', message: "what is your favorite movie", default:"this is default value"}])
.then((answer)=>{
    console.log(answer);
});

// for multiple user input just put more objects in an array 

inquirer.prompt([{name:'favmove', message: "what is your favorite movie", default:"this is default value"},{name:'favActor', message: "what is your favorite actor", default:"this is default actor"}])
.then((answer)=>{
    console.log(answer);
});

// for multiple choice we use choice key 










