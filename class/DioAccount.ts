export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value:number): void => {
    if(this.validateStatus() && value > 0){
      this.balance += value
      console.log("Foi depositado R$" + value.toFixed(2));
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus() && this.balance > 0 && this.balance >= value){
      this.balance -= value
      console.log("Foi sacado R$" + value.toFixed(2));
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
