//use the provided tests to use the function. 

function bank(array) {

    let bankBalance = 0;
    let banknotes = [];

    for (let element of array) {

        if (element.length > 2) {
            let totalCash = element.reduce((a, b) => a + b)
            bankBalance += totalCash;
            banknotes = banknotes.concat(element);

            console.log(`Service Report: ${totalCash}$ inserted. Current balance: ${bankBalance}$.`)

        } else if (element.length === 2) {
            let balanceOfCustomer = element[0];
            let withdrawMoney = element[1];

            if (balanceOfCustomer >= withdrawMoney) {
                if (bankBalance >= withdrawMoney) {
                    console.log(`You get ${withdrawMoneyz(withdrawMoney)}$. Account balance: ${(balanceOfCustomer - withdrawMoney)}$. Thank you!`)
                } else {
                    console.log('ATM machine is out of order!')
                }

            } else {
                console.log(`Not enough money in your account. Account balance: ${balanceOfCustomer}$.`)
            }

        } else if (element.length === 1) {

            console.log(`Service Report: Banknotes from ${element[0]}$: ${searchBanknote(element[0])}.`)

        }
    }

    function searchBanknote(banknote) {
        let counter = 0;
        for (let note of banknotes) {
            if (note === banknote) {
                counter++
            }

        }
        return counter
    }

    function withdrawMoneyz(ammount) {

        bankBalance -= ammount;
        banknotes = banknotes.sort((a, b) => b - a);
        let sum = 0;

        for (let i = 0; i < banknotes.length; i++) {

            if (sum === ammount) {
                break;
            }
            if (sum + banknotes[i] <= ammount) {
                sum += +banknotes.splice(i, 1);
                i--;
            }
        }

        return sum;

    }

}




bank([

    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500]

])