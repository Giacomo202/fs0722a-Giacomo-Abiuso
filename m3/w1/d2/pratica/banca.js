var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.OneDeposit = function (amount) {
        this.balance += amount;
        console.log("Deposito di ".concat(amount, "\u20AC  sul conto di: ").concat(this.name));
    };
    Account.prototype.OneWithDraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Prelievo di ".concat(amount, "\u20AC dal conto di: ").concat(this.name));
        }
        else {
            console.log("Saldo insufficente sul conto di: ".concat(this.name));
        }
    };
    return Account;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        this.balance *= 1.05;
        console.log("Interesse aggiunto all'account di: ".concat(this.name));
    };
    return MotherAccount;
}(Account));
var sonAccount = new Account("Figlio", 100);
var motherAccount = new MotherAccount("Madre", 1000);
sonAccount.OneDeposit(500);
sonAccount.OneWithDraw(800);
motherAccount.OneDeposit(300);
motherAccount.OneWithDraw(200);
motherAccount.addInterest();
console.log("Il saldo del figlio \u00E8 di :".concat(sonAccount.balance, "\u20AC"));
console.log("Il saldo della madre \u00E8 di :".concat(motherAccount.balance, "\u20AC"));
