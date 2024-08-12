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
        return(`${this.email}has logged in successfully`)
    }

    logout(){
        return(`${this.email} has logged out successfully`)
    }
}