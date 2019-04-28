"use strict";

let money,
    time;
money = Number(prompt("Ваш бюджет на месяц?"));
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};

let doneCount = 0;
do
{
    let expName = prompt("Введите обязательную статью расходов в этом месяце");
    let cost = prompt("Во сколько обойдется?");   
    
    if(typeof(expName) != null && expName != "" &&
        typeof(cost != null) && cost != "") {
            appData.expenses[expName] =  cost;
            doneCount++;
        }
}while( doneCount < 2);

/*for(let doneCount = 0; doneCount < 2; )
{
    let expName = prompt("Введите обязательную статью расходов в этом месяце");
    let cost = prompt("Во сколько обойдется?");   
    
    if(typeof(expName) != null && expName != "" &&
        typeof(cost != null) && cost != "") {
            appData.expenses[expName] =  cost;
            doneCount++;
        }
}*/

/*let doneCount = 0;
while( doneCount < 2)
{
    let expName = prompt("Введите обязательную статью расходов в этом месяце");
    let cost = prompt("Во сколько обойдется?");   
    
    if(typeof(expName) != null && expName != "" &&
        typeof(cost != null) && cost != "") {
            appData.expenses[expName] =  cost;
            doneCount++;
        }
}*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100)
{
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)
{
    console.log("Средний уровень достатка");   
} else if (appData.moneyPerDay > 2000)
{
    console.log("Високий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);