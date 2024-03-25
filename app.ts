import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'João', 10)
peopleAccount.deposit(100)
console.log("Conta pessoal após depósito: R$" + peopleAccount.getBalance()); 
peopleAccount.withdraw(50)
console.log("Conta pessoal após saque: R$" + peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('Google', 20)
companyAccount.deposit(350)
console.log("Conta corporativa após depósito: R$" + companyAccount.getBalance())
companyAccount.withdraw(10)
console.log("Conta corporativa após saque: R$" + companyAccount.getBalance())
companyAccount.getLoan(200)
console.log("Conta corporativa após empréstimo: R$" + companyAccount.getBalance())

const spAccount: SpecialAccount = new SpecialAccount('Maria', 30)
spAccount.deposit(200)
console.log("Conta especial após depósito: R$" + spAccount.getBalance()); 
spAccount.withdraw(30)
console.log("Conta especial após saque: R$" + spAccount.getBalance());

