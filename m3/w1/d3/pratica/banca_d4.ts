abstract class LavoratoreAutonomo {
  constructor(
    public codredd: number,
    public redditoannuolordo: number,
    public tasseinps: number,
    public tasseirpef: number
  ) {}

  abstract getUtileTasse(): number;
  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
  abstract getRedditoAnnuoNetto(): number;
}

class LavoratoreAutonomoConRedditivitaElevata extends LavoratoreAutonomo {
  getUtileTasse(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }

  getTasseInps(): number {
    return this.tasseinps;
  }

  getTasseIrpef(): number {
    return this.tasseirpef;
  }

  getRedditoAnnuoNetto(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }
}

class LavoratoreAutonomoConRedditivitaMedia extends LavoratoreAutonomo {
  getUtileTasse(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }

  getTasseInps(): number {
    return this.tasseinps;
  }

  getTasseIrpef(): number {
    return this.tasseirpef;
  }

  getRedditoAnnuoNetto(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }
}

class LavoratoreAutonomoConRedditivitaBassa extends LavoratoreAutonomo {
  getUtileTasse(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }

  getTasseInps(): number {
    return this.tasseinps;
  }

  getTasseIrpef(): number {
    return this.tasseirpef;
  }

  getRedditoAnnuoNetto(): number {
    return this.redditoannuolordo - this.tasseinps - this.tasseirpef;
  }
}

const lavoratore1 = new LavoratoreAutonomoConRedditivitaElevata(
  123456,
  10000,
  1000,
  2000
);

const lavoratore2 = new LavoratoreAutonomoConRedditivitaBassa(
  12345,
  1950,
  300,
  500
);

const lavoratore3 = new LavoratoreAutonomoConRedditivitaMedia(
  54321,
  5600,
  700,
  1200
);

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

console.log(lavoratore3.getUtileTasse()); // 3700
console.log(lavoratore3.getTasseInps()); // 700
console.log(lavoratore3.getTasseIrpef()); // 1200
console.log(lavoratore3.getRedditoAnnuoNetto()); // 3700 