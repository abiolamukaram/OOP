// classes
class Car{
    constructor(name,model,year){
        this.name = name
        this.model = model
        this.year = year
    }

    displayInfo(){
        return(`this is a ${this.name} ${this.model} that was developed in year ${this.year}`)
    }

}

class User{
    constructor(fullName, email, phone, password){
        this.fullName = fullName
        this.email = email
        this.phone = phone
        this.password = password
    }

    login(){
        return(`${this.email} has logged in successfully`)
    }

    logout(){
        return(`${this.email} has logged out successfully`)
    }
}

// abstraction
const myCar = new Car("Tesla", "X6", "2024")
console.log(myCar)

const mySecondCar = new Car("Toyota", "Corolla", 2020)
console.log(mySecondCar)

const firstUser = new User("Abiola", "abc@gmail.com", 9089786756, "hysknnjs")
console.log(firstUser)
console.log(firstUser.login())
console.log(firstUser.logout())


// encapsulation
class Bankaccount{
    #balance
    constructor(fullName, email, phone, initialBalance){
        this.fullName = fullName
        this.email = email
        this.phone = phone
        this.accNumber = phone
        this.#balance = initialBalance
        
    }

    deposit(amount){
        if(amount>=50){
            this.#balance += amount
        }
    }

    withdrawal(amount){
        if(amount >=50 && amount <= this.#balance){
            this.#balance -= amount
        } else{
            console.log("Insufficient funds")
        }
    }

    getBalance(){
        return this.#balance;
    }

}

const myBankaccount = new Bankaccount("Abiola", "abc@gmail.com", "908767456", 50000)
myBankaccount.deposit(1000000)
myBankaccount.withdrawal(90000)
myBankaccount.withdrawal(980000)
// console.log(myBankaccount)
// console.log(myBankaccount.getBalance())


// inheritance
class Savingsaccount extends Bankaccount{
    constructor(fullName, phone, email, initialBalance, interestRate){
        super(fullName, email, phone, initialBalance)
        this.interestRate = interestRate
    }

    applyInterest(){
        const interest = this.getBalance() * this.interestRate/100
        this.deposit(interest)
        console.log(`interest of ${interest} added successfully`)
    }
    
    
}


const mySavingsaccount = new Savingsaccount("Abiola", "abc@gmail.com", "0909765557", 0, 5)
mySavingsaccount.deposit(500000)
console.log(mySavingsaccount)
mySavingsaccount.applyInterest()
console.log(mySavingsaccount.getBalance())

class Fixeddepositeaccount extends Bankaccount{
    constructor(fullName, email,phone,initialBalance, interestRate, maturityDate){
    super(fullName, email, phone, initialBalance)
        this.interestRate = interestRate
        this.maturityDate = maturityDate
    }

    applyInterest(){
        const interest = this.getBalance() * this.interestRate/100
        this.deposit(interest)
        console.log(`interest of ${interest} added successfully after ${this.maturityDate} months`)
    }
    
    withdrawal(amount){
        console.log(`withdrawals are not allowed during the lock period of ${this.maturityDate}months`)
    }
}

const myFixeddepositeaccount = new Fixeddepositeaccount("Abiola", "abc@gmail.com", "0909765557", 50000, 5, 12)
console.log(myFixeddepositeaccount)
myFixeddepositeaccount.deposit(40000)
myFixeddepositeaccount.applyInterest()
myFixeddepositeaccount.withdrawal(20000)
console.log(myFixeddepositeaccount.getBalance())
