"use strict";

let money,
    time;

function start() {
    do {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
    } while (isNaN(money) || money == "" || money == null); //TODO: secure date    
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function() {
        let doneCount = 0;
        do {
            let expName = prompt("Введите обязательную статью расходов в этом месяце", '');
            let cost = +prompt("Во сколько обойдется?", '');
    
            if (typeof (expName) != null && expName != "" &&
                typeof (cost) != null && cost != "" && !isNaN(cost)) {
                appData.expenses[expName] = cost;
                doneCount++;
            }
        } while (doneCount < 2);
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Високий уровень достатка");
        } else {
            alert("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        for( let i = 0; i < 3; i++) {
            let optExpName = prompt("Статья необязательных расходов?", '');
    
            if (typeof (optExpName) != null && optExpName != "" ) {
                appData.optionalExpenses[i] = optExpName;
            } else {
                i--;
            }
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сума накоплений?", ''),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депощита: " + appData.monthIncome.toFixed(2));
        }
    }
};

console.log(appData);