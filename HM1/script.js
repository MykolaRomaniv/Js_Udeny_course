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

let expName = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[expName] = prompt("Во сколько обойдется?");

expName = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[expName] = prompt("Во сколько обойдется?");

alert(appData.budget / 30);