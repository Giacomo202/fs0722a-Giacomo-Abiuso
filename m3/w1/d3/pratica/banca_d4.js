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
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomoConRedditivitaElevata = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoConRedditivitaElevata, _super);
    function LavoratoreAutonomoConRedditivitaElevata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoConRedditivitaElevata.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    LavoratoreAutonomoConRedditivitaElevata.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoConRedditivitaElevata.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    LavoratoreAutonomoConRedditivitaElevata.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    return LavoratoreAutonomoConRedditivitaElevata;
}(LavoratoreAutonomo));
var LavoratoreAutonomoConRedditivitaMedia = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoConRedditivitaMedia, _super);
    function LavoratoreAutonomoConRedditivitaMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoConRedditivitaMedia.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    LavoratoreAutonomoConRedditivitaMedia.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoConRedditivitaMedia.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    LavoratoreAutonomoConRedditivitaMedia.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    return LavoratoreAutonomoConRedditivitaMedia;
}(LavoratoreAutonomo));
var LavoratoreAutonomoConRedditivitaBassa = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoConRedditivitaBassa, _super);
    function LavoratoreAutonomoConRedditivitaBassa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoConRedditivitaBassa.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    LavoratoreAutonomoConRedditivitaBassa.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoConRedditivitaBassa.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    LavoratoreAutonomoConRedditivitaBassa.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
    };
    return LavoratoreAutonomoConRedditivitaBassa;
}(LavoratoreAutonomo));
var lavoratore1 = new LavoratoreAutonomoConRedditivitaElevata(123456, 10000, 1000, 2000);
var lavoratore2 = new LavoratoreAutonomoConRedditivitaBassa(12345, 1950, 300, 500);
var lavoratore3 = new LavoratoreAutonomoConRedditivitaMedia(54321, 5600, 700, 1200);
console.log('----------------lavoratore 1 (redditività elevata)----------------');
console.log(lavoratore1.getUtileTasse()); // 7000
console.log(lavoratore1.getTasseInps()); // 1000
console.log(lavoratore1.getTasseIrpef()); // 2000
console.log(lavoratore1.getRedditoAnnuoNetto()); // 7000
console.log('----------------lavoratore 2 (redditività bassa)----------------');
console.log(lavoratore2.getUtileTasse()); // 1150
console.log(lavoratore2.getTasseInps()); // 300
console.log(lavoratore2.getTasseIrpef()); // 500
console.log(lavoratore2.getRedditoAnnuoNetto()); // 1150
console.log('----------------lavoratore 3 (redditività media)----------------');
console.log(lavoratore3.getUtileTasse()); // 
console.log(lavoratore3.getTasseInps()); // 
console.log(lavoratore3.getTasseIrpef()); //
console.log(lavoratore3.getRedditoAnnuoNetto()); // 
