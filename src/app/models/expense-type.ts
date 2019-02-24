import { Expense } from './expense';

export class ExpenseType {

    static readonly TYPES = {
        'FUEL': new ExpenseType('Fuel', 'fas fa-gas-pump'),
        'GROCERIES': new ExpenseType('Groceries', 'fas fa-bread-slice'),
        'MEALS': new ExpenseType('Meals', 'fas fa-utensils'),
        'MEDICAL': new ExpenseType('Medical', 'fas fa-plus'),
        'RENT': new ExpenseType('Rent', 'fas fa-building'),
        'SHOPPING': new ExpenseType('Shopping', 'fas fa-shopping-cart'),
        'TRANSPORT': new ExpenseType('Transport', 'far fa-subway'),
        'UTILITIES': new ExpenseType('Utilities', 'fas fa-bolt'),
        'MISC': new ExpenseType('Misc', 'fas fa-elipsis-h'),
    };

    public name: string;
    public className: string;
    public totalCost: string;
    public expenseList: Expense[] = [];

    constructor(name?: string, className?: string, totalCost?: string) {
        this.name = name;
        this.className = className;
        this.totalCost = totalCost;
    }

}
