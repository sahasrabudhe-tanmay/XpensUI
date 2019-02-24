export class Expense {

    public id: string;
    public name: string;
    public type: string;
    public cost: string;

    constructor(name?: string, type?: string, cost?: string) {
        this.name = name;
        this.type = type;
        this.cost = cost;
    }

}
