class BankAccount 
{
    #balance
    constructor(initial_balance) {
        this.#balance = initial_balance;
    }

    getBalance()
    {
        return this.#balance;
    }

    deposit(amount)
    {
        this.#balance += amount;
    }

    withdraw(amount)
    {
        if (amount <= this.#balance){
            this.#balance -= amount;
        }
        else {
            console.log('Insufficient balance');
        }
    }
}

const bank = new BankAccount(50000)
console.log(`Initial balance ${bank.getBalance()}`);
bank.deposit(10000)
console.log(bank.getBalance())
bank.withdraw(1000);
console.log(bank.getBalance());