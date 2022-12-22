class Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
  }

  getsaldocapo(): number {
    return this.saldo;
  }

  getacquistocapo(): number {
    return this.prezzoivainclusa - this.saldo;
  }
}

const fetchCapiAbbigliamento = async () => {
  try {
    const response = await fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f');
    const json = await response.json();
    const capiAbbigliamento: Abbigliamento[] = [];
    for (const capoAbbigliamentoJson of json) {
      const capoAbbigliamento = new Abbigliamento(capoAbbigliamentoJson.id, capoAbbigliamentoJson.codprod, capoAbbigliamentoJson.collezione, capoAbbigliamentoJson.capo, capoAbbigliamentoJson.modello, capoAbbigliamentoJson.quantita, capoAbbigliamentoJson.colore, capoAbbigliamentoJson.prezzoivaesclusa, capoAbbigliamentoJson.prezzoivainclusa, capoAbbigliamentoJson.disponibile, capoAbbigliamentoJson.saldo);
      capiAbbigliamento.push(capoAbbigliamento);
    }
    console.log(capiAbbigliamento);
  } catch (error) {
    console.error(error);
  }
}

fetchCapiAbbigliamento();



