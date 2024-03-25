import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus() && value > 0){
            this.balance += value + 10
        }
    }
}