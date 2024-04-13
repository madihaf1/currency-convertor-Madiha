import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AUD: 1.54,
    CAD: 1.38
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AUD', 'CAD']
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AUD', 'CAD']
    },
    {
        name: "amount",
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; //exchange rate 
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency // 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
//console.log(fromAmount);
//console.log(toAmount)
//console.log(amount)
