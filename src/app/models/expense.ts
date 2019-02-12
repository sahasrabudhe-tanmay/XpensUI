export class Expense {

    public id: string;
    public name: string;
    public type: string;
    public cost: string;

    static readonly TYPES = {
        FOOD: 'Food',
        TRAVEL: 'Travel',
        MISC: 'Miscellaneous'
    }

}
