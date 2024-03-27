#! /usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";

//! Declaring UserName And Password
let userID: string ;
let password: number;
let balance = Math.floor(Math.random() * 100000 + 10000); // Random balance

//! Welcoming
console.log(chalk.cyan(`\tWelcome to Shayan\'s ATM`));

//! Asking UserName and Id
let checkVerification = await inquirer.prompt([
  {
    type: "input",
    name: "userName",
    message: "Enter Bank ID :",
  },
  {
    type: "input",
    name: "userId",
    message: "Enter Password :",
  },
]);

//! Console Balance
console.log(
  chalk.yellow(`\t------------------------------\n\tCurrent Bank Balance: ${balance}\n\t------------------------------`)
);

//! Functionalities Start

let functionalities = await inquirer.prompt([
  {
    type: "list",
    name: "functionality",
    message: chalk.green(`Welcome Back ${checkVerification.userName}. Select From Below Option:`),
    choices: ["FastCash", "Deposit", "Withdraw", "Balance"],
  },
]);

//! Deposit Function
if (functionalities.functionality === "Deposit") {
  let amount = await inquirer.prompt([
    {
      type: "number",
      name: "Deposited",
      message: "Enter Amount ",
    },
  ]);
  balance = balance + amount.Deposited;
  console.log(chalk.green(`Deposit Successful. Your Balance is ${balance}`));
}

//! WithDrawal Function
if (functionalities.functionality === "Withdraw") {
  let withdrawAmount = await inquirer.prompt([
    {
      type: "number",
      name: "withdrawValue",
      message: "Enter Amount You want to WithDraw",
    },
  ]);
  if (withdrawAmount.withdrawValue < balance) {
    balance = balance - withdrawAmount.withdrawValue;
    console.log(
      chalk.green("Transaction completed. Your remaining balance is ", balance)
    );
  } else {
    console.log(chalk.red("Insufficient Balance. Please enter a valid amount"));
  }
}

//! CheckBalance Function
if (functionalities.functionality === "Balance") {
  console.log("Your Balance is ", balance);
}

//! Fast Cash method
if (functionalities.functionality === "FastCash") {
  let fastCash = await inquirer.prompt([
    {
      type: "list",
      name: "amount",
      message: "Enter Amount You want to WithDraw",
      choices: [1000, 2000, 5000, 10000],
    },
  ]);
  let operate = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Which operation would you like to perform?",
      choices: ["Deposit", "Withdraw"],
    },
  ]);
  if (operate.operator === "Withdraw") {
    if (fastCash.amount < balance) {
      balance = balance - fastCash.amount;
      console.log(
        chalk.green(
          "Transaction completed. Your remaining balance is ",
          balance
        )
      );
    } else {
      console.log(
        chalk.red("Insufficient Balance. Please enter a valid amount")
      );
    }
  } else {
    balance = balance + fastCash.amount;
    console.log(
      chalk.green(
        "Your amount is deposited. Your remaining balance is ",
        balance
      )
    );
  }
}
console.log(chalk.blue(`\n\t----------------------------\n\tThanks for using our system.\n\t----------------------------`));
console.log(chalk.yellow(`\n\tAuthor: Shayan Baloch `));